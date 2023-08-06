"""discord-hero: Discord Application Framework for humans

:copyright: (c) 2019-2020 monospacedmagic et al.
:license: Apache-2.0 OR MIT
"""

import discord
from discord.ext.commands import converter

from django.conf import settings as django_settings
from django.core.exceptions import NON_FIELD_ERRORS
from django.db import connection, models as _models
from django.db.models import prefetch_related_objects
from django.db.models.fields.reverse_related import ForeignObjectRel

import hero
from hero import fields
from .errors import UserDoesNotExist
# temporary fix until Django's ORM is async
from .utils import async_to_sync, sync_to_async_threadsafe


class QuerySet(_models.QuerySet):
    @sync_to_async_threadsafe
    def async_get(self, *args, **kwargs):
        return super(QuerySet, self).get(*args, **kwargs)
    async_get.__doc__ = _models.QuerySet.get.__doc__

    @sync_to_async_threadsafe
    def async_create(self, **kwargs):
        return super(QuerySet, self).create(**kwargs)
    async_create.__doc__ = _models.QuerySet.create.__doc__

    @sync_to_async_threadsafe
    def async_get_or_create(self, *args, **kwargs):
        return super(QuerySet, self).get_or_create(*args, **kwargs)
    async_get_or_create.__doc__ = _models.QuerySet.get_or_create.__doc__

    @sync_to_async_threadsafe
    def async_update_or_create(self, *args, **kwargs):
        return super(QuerySet, self).update_or_create(*args, **kwargs)
    async_update_or_create.__doc__ = _models.QuerySet.update_or_create.__doc__

    @sync_to_async_threadsafe
    def async_bulk_create(self, *args, **kwargs):
        return super(QuerySet, self).bulk_create(*args, **kwargs)
    async_bulk_create.__doc__ = _models.QuerySet.bulk_create.__doc__

    @sync_to_async_threadsafe
    def async_bulk_update(self, *args, **kwargs):
        return super(QuerySet, self).bulk_update(*args, **kwargs)
    async_bulk_update.__doc__ = _models.QuerySet.bulk_update.__doc__

    @sync_to_async_threadsafe
    def async_count(self):
        return super(QuerySet, self).count()
    async_count.__doc__ = _models.QuerySet.count.__doc__

    @sync_to_async_threadsafe
    def async_in_bulk(self, *args, **kwargs):
        return super(QuerySet, self).in_bulk(*args, **kwargs)
    async_in_bulk.__doc__ = _models.QuerySet.in_bulk.__doc__

    @sync_to_async_threadsafe
    def async_iterator(self, *args, **kwargs):
        return super(QuerySet, self).iterator(*args, **kwargs)
    async_iterator.__doc__ = _models.QuerySet.iterator.__doc__

    @sync_to_async_threadsafe
    def async_latest(self, *args):
        return super(QuerySet, self).latest(*args)
    async_latest.__doc__ = _models.QuerySet.latest.__doc__

    @sync_to_async_threadsafe
    def async_earliest(self, *args):
        return super(QuerySet, self).earliest(*args)
    async_earliest.__doc__ = _models.QuerySet.earliest.__doc__

    @sync_to_async_threadsafe
    def async_first(self):
        return super(QuerySet, self).first()
    async_first.__doc__ = _models.QuerySet.first.__doc__

    @sync_to_async_threadsafe
    def async_last(self):
        return super(QuerySet, self).last()
    async_last.__doc__ = _models.QuerySet.last.__doc__

    @sync_to_async_threadsafe
    def async_aggregate(self, *args, **kwargs):
        return super(QuerySet, self).aggregate(*args, **kwargs)
    async_aggregate.__doc__ = _models.QuerySet.aggregate.__doc__

    @sync_to_async_threadsafe
    def async_exists(self):
        return super(QuerySet, self).exists()
    async_exists.__doc__ = _models.QuerySet.exists.__doc__

    @sync_to_async_threadsafe
    def async_update(self, **kwargs):
        return super(QuerySet, self).update(**kwargs)
    async_update.__doc__ = _models.QuerySet.update.__doc__

    @sync_to_async_threadsafe
    def async_delete(self):
        return super(QuerySet, self).delete()
    async_delete.__doc__ = _models.QuerySet.delete.__doc__


class Manager(_models.manager.BaseManager.from_queryset(QuerySet)):
    pass


class Model(_models.Model):
    class Meta:
        abstract = True
        base_manager_name = 'objects'
        default_manager_name = 'custom_default_manager'

    objects: QuerySet = Manager()
    custom_default_manager = Manager()
    _cached_core = None
    _is_loaded = False

    @property
    def _core(self):
        """The :class:`Core`. Should only be accessed from within the
        model class itself.
        """
        if self._cached_core is None:
            self._cached_core = hero.get_cache(django_settings.NAMESPACE).core
        return self._cached_core

    @property
    def _extension(self):
        if self._meta.app_label == 'hero':
            return None
        return self._core.__extensions[self._meta.app_label]

    @property
    def is_loaded(self):
        return self._is_loaded

    @sync_to_async_threadsafe
    def async_load(self, prefetch_related=True):
        self.load(prefetch_related=prefetch_related)

    def load(self, prefetch_related=True):
        if prefetch_related is not False:
            if prefetch_related is True:
                prefetch_related_objects((self,), *tuple((f.get_attname() + '_set' for f in self._meta.fields
                                                          if isinstance(f, ForeignObjectRel))))
            elif prefetch_related is None:
                self.refresh_from_db()
                self.objects.prefetch_related((None,))
            else:
                self.objects.prefetch_related(prefetch_related)
        else:
            self.refresh_from_db()
        self._is_loaded = True

    @sync_to_async_threadsafe
    def async_save(self, **kwargs):
        super().save(**kwargs)

    @sync_to_async_threadsafe
    def async_validate(self):
        self.full_clean()

    def validate(self):
        self.full_clean()

    @sync_to_async_threadsafe
    def async_delete(self, keep_parents=False, **kwargs):
        super().delete(keep_parents=keep_parents, **kwargs)

    @sync_to_async_threadsafe
    @classmethod
    def async_get(cls, **kwargs):
        return cls.objects.get(**kwargs)

    @classmethod
    def get(cls, **kwargs):
        return cls.objects.get(**kwargs)

    @sync_to_async_threadsafe
    @classmethod
    def async_create(cls, **kwargs):
        return cls.objects.create(**kwargs)

    @classmethod
    def create(cls, **kwargs):
        return cls.objects.create(**kwargs)

    @sync_to_async_threadsafe
    @classmethod
    def async_get_or_create(cls, defaults=None, **kwargs):
        return cls.objects.get_or_create(defaults=defaults, **kwargs)

    @classmethod
    def get_or_create(cls, defaults=None, **kwargs):
        return cls.objects.get_or_create(defaults=defaults, **kwargs)

    @sync_to_async_threadsafe
    @classmethod
    def async_update_or_create(cls, defaults=None, **kwargs):
        return cls.objects.update_or_create(defaults=defaults, **kwargs)

    @classmethod
    def update_or_create(cls, defaults=None, **kwargs):
        return cls.objects.update_or_create(defaults=defaults, **kwargs)


class CoreSettings(Model):
    name = fields.CharField(primary_key=True, max_length=64)
    prefixes = fields.SeparatedValuesField(max_length=256, default=['!'])
    description = fields.TextField(max_length=512, blank=True, null=True)
    lang = fields.LanguageField()
    home = fields.GuildField(blank=True, null=True, on_delete=fields.SET_NULL)


class DiscordModel(Model):
    class Meta:
        abstract = True

    _discord_obj = None
    _discord_cls = None
    _discord_converter_cls = None

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        obj = cls(id=discord_obj.id)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except User.DoesNotExist:
            raise UserDoesNotExist(user_id=discord_obj.id)
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    @classmethod
    async def convert(cls, ctx, argument):
        discord_obj = await cls._discord_converter_cls.convert(ctx, argument)
        obj, existed_already = await cls.from_discord_obj(discord_obj)
        if not existed_already:
            await obj.async_save()
        return obj

    async def fetch(self):
        raise NotImplemented

    @property
    def is_fetched(self):
        return self._discord_obj is not None

    def __getattr__(self, name):
        if hasattr(self._discord_obj, name):
            return getattr(self._discord_obj, name)
        else:
            raise AttributeError(f"'{self.__class__.__name__}' object has no attribute '{name}'")

    def __str__(self):
        if self.is_fetched:
            return self.name
        else:
            return str(self.id)

    def __int__(self):
        return self.id

    def __repr__(self):
        return str(self)

    def __hash__(self):
        return hash(self.id)


# USER_ACCESS_CACHE_KEY = "{user.id}_{queried_field}_{method}"


class User(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    is_staff = fields.BooleanField(default=False, db_index=True)
    is_active = fields.BooleanField(default=True, db_index=True)
    register_message = fields.MessageField(blank=True, none=True, on_delete=fields.SET_NULL)
    language = fields.LanguageField()

    _discord_cls = discord.User
    _discord_converter_cls = converter.UserConverter

    @sync_to_async_threadsafe
    def async_delete(self, using=None, keep_parents=False):
        super().delete(using=using, keep_parents=keep_parents)
        self.__class__.create(id=self.id, is_active=False)

    def delete(self, using=None, keep_parents=False):
        super().delete(using=using, keep_parents=keep_parents)
        self.__class__.create(id=self.id, is_active=False)

    @sync_to_async_threadsafe
    def async_load(self, prefetch_related=True):
        super().load(prefetch_related=False)
        if not self.is_active:
            raise self.InactiveUser(f"The user {self.id} is inactive")

    def load(self, prefetch_related=True):
        super().load(prefetch_related=True)
        if not self.is_active:
            raise self.InactiveUser(f"The user {self.id} is inactive")

    async def fetch(self) -> discord.User:
        if not self._is_loaded:
            self.load()
        discord_user = self._core.get_user(self.id)
        if discord_user is None:
            discord_user = await self._core.fetch_user(self.id)
        self._discord_obj = discord_user
        return discord_user


class Guild(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    home = fields.BooleanField(default=False)
    shard_id = fields.SmallIntegerField(db_index=True)
    register_time = fields.DateTimeField(auto_now_add=True)
    invite_code = fields.CharField(null=True, blank=True, max_length=64, db_index=True)
    prefix = fields.CharField(null=True, blank=True, max_length=64)
    language = fields.LanguageField()
    members = fields.ManyToManyField(to='User', through='Member')
    moderating_guild = fields.GuildField(null=True, blank=True, on_delete=fields.SET_NULL)

    _discord_cls = discord.Guild

    @property
    def invite_url(self):
        if self.invite_code is None:
            return None
        return f'https://discord.gg/{self.invite_code}'

    @invite_url.setter
    def invite_url(self, value: str):
        if not isinstance(value, str):
            raise TypeError("invite_url must be a str")
        try:
            self.invite_code = value.split('://discord.gg/')[1]
        except IndexError:
            try:
                self.invite_code = value.split('://discordapp.com/invite/')[1]
            except IndexError:
                try:
                    self.invite_code = value.split('://discord.com/invite/')[1]
                except IndexError:
                    raise ValueError("Not a valid invite URL.")

    async def fetch(self) -> discord.Guild:
        discord_guild = self._core.get_guild(self.id)
        if discord_guild is None:
            discord_guild = await self._core.fetch_guild(self.id)
        self._discord_obj = discord_guild
        return discord_guild


class TextChannel(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    guild = fields.GuildField(db_index=True, on_delete=fields.CASCADE)
    language = fields.LanguageField()

    _discord_cls = discord.TextChannel
    _discord_converter_cls = converter.TextChannelConverter

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        guild = async_to_sync(Guild.from_discord_obj(discord_obj.guild))
        obj = cls(id=discord_obj.id, guild=guild)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    async def fetch(self) -> discord.TextChannel:
        discord_text_channel = self._core.get_channel(self.id)
        if discord_text_channel is None:
            discord_text_channel = await self._core.fetch_channel(self.id)
        self._discord_obj = discord_text_channel
        if not self.guild.is_fetched:
            await self.guild.fetch()
        return discord_text_channel


class VoiceChannel(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    guild = fields.GuildField(db_index=True, on_delete=fields.CASCADE)

    _discord_cls = discord.VoiceChannel
    _discord_converter_cls = converter.VoiceChannelConverter

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        guild = async_to_sync(Guild.from_discord_obj(discord_obj.guild))
        obj = cls(id=discord_obj.id, guild=guild)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    async def fetch(self) -> discord.VoiceChannel:
        discord_voice_channel = self._core.get_channel(self.id)
        if discord_voice_channel is None:
            discord_voice_channel = await self._core.fetch_channel(self.id)
        self._discord_obj = discord_voice_channel
        if not self.guild.is_fetched:
            await self.guild.fetch()
        return discord_voice_channel


class CategoryChannel(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    guild = fields.GuildField(db_index=True, on_delete=fields.CASCADE)

    _discord_cls = discord.CategoryChannel
    _discord_converter_cls = converter.CategoryChannelConverter

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        guild = async_to_sync(Guild.from_discord_obj(discord_obj.guild))
        obj = cls(id=discord_obj.id, guild=guild)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    async def fetch(self) -> discord.CategoryChannel:
        discord_category_channel = self._core.get_channel(self.id)
        if discord_category_channel is None:
            discord_category_channel = await self._core.fetch_channel(self.id)
        self._discord_obj = discord_category_channel
        if not self.guild.is_fetched:
            await self.guild.fetch()
        return discord_category_channel


class Role(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    guild = fields.GuildField(db_index=True, on_delete=fields.CASCADE)

    _discord_cls = discord.Role
    _discord_converter_cls = converter.RoleConverter

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        guild = async_to_sync(Guild.from_discord_obj(discord_obj.guild))
        obj = cls(id=discord_obj.id, guild=guild)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    async def fetch(self) -> discord.Role:
        if not self.guild.is_fetched:
            await self.guild.fetch()
        discord_role = self.guild.get_role(self.id)
        if discord_role is None:
            discord_role = await self.guild.fetch_role(self.id)
        self._discord_obj = discord_role
        return discord_role


class Emoji(DiscordModel):
    id = fields.BigIntegerField(primary_key=True, auto_created=True)
    guild = fields.GuildField(db_index=True, null=True, blank=True, on_delete=fields.CASCADE)
    name = fields.CharField(max_length=64)
    animated = fields.BooleanField(default=False)
    is_custom = fields.BooleanField()

    _discord_cls = discord.PartialEmoji
    _discord_converter_cls = converter.PartialEmojiConverter

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        guild = async_to_sync(Guild.from_discord_obj(discord_obj.guild))
        obj = cls(id=discord_obj.id, guild=guild,
                  name=discord_obj.name, animated=discord_obj.animated)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    async def fetch(self) -> discord.PartialEmoji:
        if self.is_custom:
            if not self.guild.is_fetched:
                await self.guild.fetch()
            self.guild: discord.Guild
            emoji = await self.guild.fetch_emoji(self.id)
            discord_emoji = discord.PartialEmoji(name=emoji.name, animated=emoji.animated, id=emoji.id)
            if self.name != emoji.name:
                self.name = emoji.name
                await self.async_save()
        else:
            discord_emoji = discord.PartialEmoji(name=self.name)
        self._discord_obj = discord_emoji

        return discord_emoji


class Member(DiscordModel):
    class Meta:
        unique_together = (('user', 'guild'),)

    auto_id = _models.BigAutoField(primary_key=True)
    user = fields.UserField(db_index=True, on_delete=fields.CASCADE)
    guild = fields.GuildField(db_index=True, on_delete=fields.CASCADE)

    _discord_cls = discord.Member
    _discord_converter_cls = converter.MemberConverter

    def __getattr__(self, name):
        if name == 'id':
            _discord_obj = getattr(self, '_discord_obj', None)
            if _discord_obj is not None:
                return self._discord_obj.id
        return super().__getattr__(name)

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, discord.Member):
            raise TypeError(f"discord_obj has to be a discord.Member "
                            f"but a {type(discord_obj).__name__} was passed")
        _user = async_to_sync(User.from_discord_obj(discord_obj.user))
        _guild = async_to_sync(Guild.from_discord_obj(discord_obj.guild))
        # workaround for the nonexistence of composite primary keys in Django
        qs = cls.objects.filter(user=_user, guild=_guild)
        if qs.exists():
            obj = qs.first()
            obj.load()
            existed_already = True
        else:
            obj = cls(user=_user, guild=_guild)
            existed_already = False
        obj._discord_obj = discord_obj
        return obj, existed_already

    async def fetch(self) -> discord.Member:
        if not self.guild.is_fetched:
            await self.guild.fetch()
        discord_member = self.guild.get_member(self.id)
        if discord_member is None:
            discord_member = await self.guild.fetch_member(self.id)
        self._discord_obj = discord_member
        if not self.user.is_fetched:
            self.user._discord_obj = discord_member.user
        return discord_member


class Message(DiscordModel):
    id = fields.BigIntegerField(primary_key=True)
    channel = fields.TextChannelField(db_index=True, on_delete=fields.CASCADE)
    author = fields.UserField(db_index=True, on_delete=fields.CASCADE)

    _discord_cls = discord.Message
    _discord_converter_cls = converter.MessageConverter

    @property
    def guild(self):
        return self.channel.guild

    @guild.setter
    def guild(self, value):
        self.channel.guild = value

    @sync_to_async_threadsafe
    @classmethod
    def from_discord_obj(cls, discord_obj):
        """Create a Hero object from a Discord object"""
        if not isinstance(discord_obj, cls.discord_cls):
            raise TypeError(f"discord_obj has to be a discord.{cls.discord_cls.__name__} "
                            f"but a {type(discord_obj).__name__} was passed")
        channel = async_to_sync(TextChannel.from_discord_obj(discord_obj.channel))
        author = async_to_sync(Member.from_discord_obj(discord_obj.author))
        obj = cls(id=discord_obj.id, channel=channel, author=author)
        obj._discord_obj = discord_obj
        try:
            obj.load()
            existed_already = True
        except cls.DoesNotExist:
            existed_already = False
        return obj, existed_already

    async def fetch(self) -> discord.Message:
        if not self.channel.is_fetched:
            await self.channel.fetch()
        discord_message = self.channel.get_message(self.id)
        if discord_message is None:
            discord_message = await self.channel.fetch_message(self.id)
        self._discord_obj = discord_message
        return discord_message


class Settings(Model):
    class Meta:
        abstract = True

    namespace = fields.NamespaceField(primary_key=True)
