
from anthill.common.database import DatabaseError, DuplicateError
from anthill.common.model import Model

import ujson
import re
import random


class PromoError(Exception):
    def __init__(self, code, message):
        self.code = code
        self.message = message

    def __str__(self):
        return str(self.code) + ": " + self.message


class PromoNotFound(Exception):
    pass


class PromoExists(Exception):
    pass


class PromoAdapter(object):
    def __init__(self, data):
        self.code_id = str(data.get("code_id"))
        self.key = data.get("code_key")
        self.expires = data.get("code_expires")
        self.contents = data.get("code_contents")
        self.amount = data.get("code_amount")


class PromoModel(Model):
    PROMO_PATTERN = re.compile("[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}")

    def __init__(self, db):
        self.db = db

    def get_setup_db(self):
        return self.db

    def get_setup_tables(self):
        return ["promo_code", "promo_code_users"]

    def random_code(self, n):
        return ''.join(random.choice("ABCDEFGHJKLMNPQRSTUVWXYZ0123456789") for _ in range(n))

    def random(self):
        return self.random_code(4) + "-" + self.random_code(4) + "-" + self.random_code(4)

    def validate(self, code):
        if not re.match(PromoModel.PROMO_PATTERN, code):
            raise PromoError(400, "Promo code is not valid (should be XXXX-XXXX-XXXX)")

    def has_delete_account_event(self):
        return True

    async def accounts_deleted(self, gamespace, accounts, gamespace_only):
        try:
            if gamespace_only:
                await self.db.execute(
                    """
                        DELETE FROM `promo_code_users`
                        WHERE `gamespace_id`=%s AND `account_id` IN %s;
                    """, gamespace, accounts)
            else:
                await self.db.execute(
                    """
                        DELETE FROM `promo_code_users`
                        WHERE `account_id` IN %s;
                    """, accounts)
        except DatabaseError as e:
            raise PromoError(500, "Failed to delete promo code usages: " + e.args[1])

    async def wrap_contents(self, gamespace_id, contents):
        keys = list(contents.keys())

        try:
            wrapped = await self.db.query("""
                SELECT * FROM `promo_contents`
                WHERE `gamespace_id`=%s AND  `content_name` IN %s;
            """, gamespace_id, keys)
        except DatabaseError as e:
            raise PromoError(500, "Failed to wrap contents: " + e.args[1])

        result = {
            str(item["content_id"]): contents[item["content_name"]]
            for item in wrapped
        }

        return result

    async def new_promo(self, gamespace_id, promo_key, promo_use_amount, promo_expires, promo_contents):

        if not isinstance(promo_contents, dict):
            raise PromoError(400, "Contents is not a dict")

        try:
            await self.find_promo(gamespace_id, promo_key)
        except PromoNotFound:
            pass
        else:
            raise PromoError(409, "Promo code '{0}' already exists.".format(promo_key))

        try:
            result = await self.db.insert("""
                INSERT INTO `promo_code`
                (`gamespace_id`, `code_key`, `code_amount`, `code_expires`, `code_contents`)
                VALUES (%s, %s, %s, %s, %s);
            """, gamespace_id, promo_key, promo_use_amount, promo_expires, ujson.dumps(promo_contents))
        except DuplicateError:
            raise PromoExists()
        except DatabaseError as e:
            raise PromoError(500, "Failed to add new promo code: " + e.args[1])

        return result

    async def find_promo(self, gamespace_id, promo_key):
        try:
            result = await self.db.get("""
                SELECT *
                FROM `promo_code`
                WHERE `code_key`=%s AND `gamespace_id`=%s;
            """, promo_key, gamespace_id)
        except DatabaseError as e:
            raise PromoError(500, "Failed to find promo code: " + e.args[1])

        if result is None:
            raise PromoNotFound()

        return PromoAdapter(result)

    async def get_promo(self, gamespace_id, promo_id):
        try:
            result = await self.db.get("""
                SELECT *
                FROM `promo_code`
                WHERE `code_id`=%s AND `gamespace_id`=%s;
            """, promo_id, gamespace_id)
        except DatabaseError as e:
            raise PromoError(500, "Failed to get promo code: " + e.args[1])

        if result is None:
            raise PromoNotFound()

        return PromoAdapter(result)

    async def delete_promo(self, gamespace_id, promo_id):
        try:
            await self.db.execute("""
                DELETE
                FROM `promo_code`
                WHERE `code_id`=%s AND `gamespace_id`=%s;
            """, promo_id, gamespace_id)

            await self.db.execute("""
                DELETE
                FROM `promo_code_users`
                WHERE `code_id`=%s AND `gamespace_id`=%s;
            """, promo_id, gamespace_id)
        except DatabaseError as e:
            raise PromoError(500, "Failed to delete content: " + e.args[1])

    async def update_promo(self, gamespace_id, promo_id, promo_key, promo_use_amount, promo_expires, promo_contents):

        if not isinstance(promo_contents, dict):
            raise PromoError(400, "Contents is not a dict")

        try:
            await self.db.execute("""
                UPDATE `promo_code`
                SET `code_key`=%s, `code_amount`=%s, `code_expires`=%s, `code_contents`=%s
                WHERE `code_id`=%s AND `gamespace_id`=%s;
            """, promo_key, promo_use_amount, promo_expires, ujson.dumps(promo_contents), promo_id, gamespace_id)
        except DatabaseError as e:
            raise PromoError(500, "Failed to update content: " + e.args[1])

    async def get_promo_usages(self, gamespace_id, promo_id):
        usages = await self.db.query("""
            SELECT `account_id`
            FROM `promo_code_users`
            WHERE `code_id`=%s AND `gamespace_id`=%s;
        """, promo_id, gamespace_id)

        return [str(usage["account_id"]) for usage in usages]

    async def use_promo(self, gamespace_id, account_id, promo_key):
        async with self.db.acquire(auto_commit=False) as db:
            try:
                promo = await db.get(
                    """
                        SELECT `code_id`, `code_contents`, `code_amount`
                        FROM `promo_code`
                        WHERE `code_key`=%s AND `gamespace_id`=%s AND `code_amount` > 0 AND `code_expires` > NOW()
                        FOR UPDATE;
                    """, promo_key, gamespace_id)

                if not promo:
                    raise PromoNotFound()

                promo_id = promo["code_id"]
                promo_contents = promo["code_contents"]
                promo_amount = promo["code_amount"]

                ids = list(promo_contents.keys())

                if not ids:
                    raise PromoError(400, "Promo code has no contents.")

                used = await db.get(
                    """
                        SELECT *
                        FROM `promo_code_users`
                        WHERE `code_id`=%s AND `gamespace_id`=%s AND `account_id`=%s;
                    """, promo_id, gamespace_id, account_id)

                if used:
                    raise PromoError(409, "Code already used by this user")

                await db.insert(
                    """
                        INSERT INTO `promo_code_users`
                        (`gamespace_id`, `code_id`, `account_id`)
                        VALUES (%s, %s, %s);
                    """, gamespace_id, promo_id, account_id)

                promo_amount -= 1

                await db.execute(
                    """
                        UPDATE `promo_code`
                        SET `code_amount` = %s
                        WHERE `code_id`=%s AND `gamespace_id`=%s;
                    """, promo_amount, promo_id, gamespace_id)

                contents_result = []

                contents = await db.query(
                    """
                        SELECT `content_json`, `content_id`
                        FROM `promo_contents`
                        WHERE `content_id` IN %s
                    """, ids)

                for cnt in contents:
                    result = {
                        "payload": cnt["content_json"],
                        "amount": promo_contents[str(cnt["content_id"])]
                    }
                    contents_result.append(result)

                return {
                    "result": contents_result
                }

            finally:
                await db.commit()
