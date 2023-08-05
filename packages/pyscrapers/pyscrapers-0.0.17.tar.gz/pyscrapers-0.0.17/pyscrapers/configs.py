"""
All configurations for pymakehelper
"""
import browser_cookie3
from pytconf.config import Config, ParamCreator

import logging


class ConfigLogging(Config):
    """
    Parameters to control logging
    """
    loglevel = ParamCreator.create_choice(
        choice_list=[
            logging.getLevelName(logging.NOTSET),
            logging.getLevelName(logging.DEBUG),
            logging.getLevelName(logging.INFO),
            logging.getLevelName(logging.WARNING),
            logging.getLevelName(logging.WARN),
            logging.getLevelName(logging.ERROR),
            logging.getLevelName(logging.FATAL),
            logging.getLevelName(logging.CRITICAL),
        ],
        help_string="What log level to use?",
        default=logging.getLevelName(logging.ERROR),

    )


class ConfigDebugRequests(Config):
    """
    Configure how to user the requests module
    """
    debug = ParamCreator.create_bool(
        help_string="Do you want to debug the requests module?",
        default=False,
    )


class ConfigCookiesSource(Config):
    """
        Configure where to get cookies from
    """

    browser = ParamCreator.create_choice(
        choice_list=["none", "firefox", "chrome"],
        help_string="Which browser to take cookies from?",
        default="firefox",
    )

    cookies = None

    @classmethod
    def config_cookies(cls):
        if ConfigCookiesSource.browser == "firefox":
            cls.cookies = browser_cookie3.firefox()
        if ConfigCookiesSource.browser == "chrome":
            cls.cookies = browser_cookie3.chrome()


class ConfigSiteId(Config):
    """
    Parameters for downloading workers
    """
    site = ParamCreator.create_choice(
        choice_list=["facebook", "instagram", "travelgirls", "vk", "mamba.ru"],
        help_string="Which site to download from?",
    )
    user_id = ParamCreator.create_str(
        help_string="""Which user id to user?
            https://www.facebook.com/profile.php?id=[user_id]
            https://www.instagram.com/[user_id]
            http://www.travelgirls.com/member/[user_id]
            https://vk.com/id[user_id]
            http://www.mamba.ru/mb[user_id]""",
    )
    start = ParamCreator.create_int(
        help_string="start number for image names",
        default=0,
    )


class ConfigPornhubSearch(Config):
    """
    Parameters for search
    """
    query = ParamCreator.create_str(
        help_string="What is the query string?",
    )
    use_ordering = ParamCreator.create_bool(
        help_string="use ordering in the search operation",
        default=True,
    )
    ordering = ParamCreator.create_choice(
        choice_list=["longest", "featured", "newest", "mostviewed", "rating"],
        help_string="by which ordering to fetch result?",
        default="longest",
    )
    use_period = ParamCreator.create_bool(
        help_string="use period in the search operation",
        default=False,
    )
    period = ParamCreator.create_choice(
        choice_list=["weekly", "monthly", "alltime"],
        help_string="what period to search?",
        default="weekly",
    )
    use_tags = ParamCreator.create_bool(
        help_string="should we use tags in search?",
        default=False,
    )
    tags = ParamCreator.create_list_str(
        help_string="tags to be used in search",
        default=[],
    )
    literal = ParamCreator.create_str(
        help_string="literal for tags (one character)",
        default="f",
    )
    limit = ParamCreator.create_int_or_none(
        help_string="Limit on search results or None for no limit",
        default=100,
    )


class ConfigPornhubDownload(Config):
    """
    Configuration for pornhub download
    """
    folder = ParamCreator.create_existing_folder(
        help_string="where to save the data to?",
        default="/home/mark/links/pornhub_dl",
    )


class ConfigYoutubeDl(Config):
    """
    Configuration to download a single url
    """
    url = ParamCreator.create_str(
        help_string="the URL to download",
    )
    folder = ParamCreator.create_existing_folder(
        help_string="where to save the data to?",
        default="/home/mark/links/youtube_dl",
    )


class ConfigPornhubPornstar(Config):
    """
    Parameters for what pornstar to download
    """
    name = ParamCreator.create_str(
        help_string="name of the star"
    )
