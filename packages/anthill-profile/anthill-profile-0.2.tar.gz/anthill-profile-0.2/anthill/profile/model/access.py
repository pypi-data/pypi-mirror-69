
from anthill.common.model import Model

__author__ = "desertkun"


class AccessAdapter(object):
    def __init__(self, data):
        self.private = data.get("access_private", "").split("\n")
        self.protected = data.get("access_protected", "").split("\n")
        self.public = data.get("access_public", "").split("\n")

    def get_private(self):
        return self.private

    def get_protected(self):
        return self.protected

    def get_public(self):
        return self.public


class AccessDenied(Exception):
    pass


class NoAccessData(Exception):
    pass


class ProfileAccessModel(Model):
    READ = 0
    READ_OTHERS = 1
    WRITE = 2

    async def __get_access_data__(self, gamespace_id):

        access = await self.db.get(
            """
                SELECT * 
                FROM `gamespace_access`
                WHERE `gamespace_id`=%s;
            """, gamespace_id, cache_hash=('profile_access', gamespace_id), cache_time=600)

        if access is None:
            raise NoAccessData()

        return AccessAdapter(access)

    def __init__(self, db):
        self.db = db

    async def setup_table_gamespace_access(self):
        await self.set_access(1, [], [], ["name", "avatar", "@time_updated", "@time_created"])

    def get_setup_tables(self):
        return ["gamespace_access"]

    def get_setup_db(self):
        return self.db

    async def get_access(self, gamespace_id):
        
        try:
            access = await self.__get_access_data__(gamespace_id)
        except NoAccessData:
            return AccessAdapter({})

        return access

    async def set_access(self, gamespace_id, access_private, access_protected, access_public):

        data_private = "\n".join(access_private)
        data_protected = "\n".join(access_protected)
        data_public = "\n".join(access_public)

        try:
            await self.__get_access_data__(gamespace_id)
        except NoAccessData:
            await self.db.insert(
                """
                    INSERT INTO `gamespace_access`
                    (gamespace_id, access_private, access_protected, access_public)
                    VALUES (%s, %s, %s, %s);
                """, gamespace_id, data_private, data_protected,
                data_public, cache_hash=('profile_access', gamespace_id))

        else:
            await self.db.execute(
                """
                    UPDATE `gamespace_access`
                    SET `access_private`=%s, `access_protected`=%s, `access_public`=%s
                    WHERE `gamespace_id`=%s;
                """, data_private, data_protected, data_public,
                gamespace_id, cache_hash=('profile_access', gamespace_id))

    async def validate_access(self, gamespace_id, fields, operation):

        access = await self.get_access(gamespace_id)

        if operation == ProfileAccessModel.READ:

            private = access.get_private()
            result = list(set(fields) - set(private))
            return result

        elif operation == ProfileAccessModel.READ_OTHERS:

            public = access.get_public()
            result = list(set(public) & set(fields))
            return result

        elif operation == ProfileAccessModel.WRITE:

            private = access.get_private()
            protected = access.get_protected()

            if any((field in protected) or (field in private) for field in fields):
                raise AccessDenied()
