
from anthill.common.options import define
import os

# Main

define("host",
       default="http://localhost:9505",
       help="Public hostname of this service",
       type=str)

define("listen",
       default="port:9505",
       help="Socket to listen. Could be a port number (port:N), or a unix domain socket (unix:PATH)",
       type=str)

define("name",
       default="dlc",
       help="Service short name. User to discover by discovery service.",
       type=str)

# MySQL database

define("db_host",
       default="127.0.0.1",
       type=str,
       help="MySQL database location")

define("db_username",
       default="root",
       type=str,
       help="MySQL account username")

define("db_password",
       default="",
       type=str,
       help="MySQL account password")

define("db_name",
       default="dev_dlc",
       type=str,
       help="MySQL database name")

# Regular cache

define("cache_host",
       default="127.0.0.1",
       help="Location of a regular cache (redis).",
       group="cache",
       type=str)

define("cache_port",
       default=6379,
       help="Port of regular cache (redis).",
       group="cache",
       type=int)

define("cache_db",
       default=4,
       help="Database of regular cache (redis).",
       group="cache",
       type=int)

define("cache_max_connections",
       default=500,
       help="Maximum connections to the regular cache (connection pool).",
       group="cache",
       type=int)

# DLC

if os.name == "nt":
    # Windows
    define("data_location",
           default="C:/Anthill/dlc-data",
           help="DLC content location folder",
           group="dlc",
           type=str)

    define("data_runtime_location",
           default="C:/Anthill/dlc-runtime",
           help="DLC content runtime folder",
           group="dlc",
           type=str)

    define("data_host_location",
           default="http://dlc-dev.anthill/download/",
           help="DLC content prefix URL",
           group="dlc",
           type=str)
else:
    # Unix
    define("data_location",
           default="/usr/local/anthill/dlc-data",
           help="DLC content location folder",
           group="dlc",
           type=str)

    define("data_runtime_location",
           default="/usr/local/anthill/dlc-runtime",
           help="DLC content runtime folder",
           group="dlc",
           type=str)

    define("data_host_location",
           default="http://dlc-dev.anthill/download/",
           help="DLC content prefix URL",
           group="dlc",
           type=str)