import argparse
import os
import random
import sys

import grapejuice_common.util
from grapejuice_common.gtk import gtk_stuff
from grapejuice_common.gtk.gtk_stuff import gtk_boot
from grapejuice_common.ipc.dbus_client import dbus_connection
from grapejuice_common.logs import log_config
from grapejuice_common.logs.log_vacuum import vacuum_logs


def main_gui():
    def make_main_window():
        from grapejuice_common.logs import self_test
        self_test.post.run()

        from grapejuice.gui.main_window import MainWindow
        main_window = MainWindow()
        main_window.show()

    gtk_boot(make_main_window)


def func_gui(args):
    main_gui()


def func_player(args):
    def player_main():
        from grapejuice_common.features.settings import settings

        if settings.n_player_dialogs_remain > 0:
            settings.n_player_dialogs_remain = settings.n_player_dialogs_remain - 1
            settings.save()

            gtk_stuff.dialog("Currently, the Roblox Player is not confirmed to be working properly with Wine and "
                             "therefore is not supported by the Grapejuice project. Grapejuice will still launcher the "
                             "player, but it will most likely not work.")

        dbus_connection().play_game(grapejuice_common.util.prepare_uri(args.uri))

    gtk_boot(player_main, gtk_main=False)

    return 0


def func_studio(args):
    uri = grapejuice_common.util.prepare_uri(args.uri)
    if uri:
        is_local = False
        if not uri.startswith("roblox-studio:"):
            uri = "Z:" + uri.replace("/", "\\")
            is_local = True

        if is_local:
            dbus_connection().edit_local_game(uri)
        else:
            dbus_connection().edit_cloud_game(uri)

    else:
        dbus_connection().launch_studio()


def main(in_args=None):
    log_config.configure_logging("grapejuice")

    from grapejuice_common.features.settings import settings
    vacuum_logs()

    if settings:
        # TODO: Add logging for successful settings loading (Issue #9)
        pass

    if in_args is None:
        in_args = sys.argv

    if random.randint(0, 10) == 5:
        print("beep beep")

    parser = argparse.ArgumentParser(prog="grapejuice", description="Manage Roblox on Linux")
    subparsers = parser.add_subparsers(title="subcommands", help="sub-command help")

    parser_gui = subparsers.add_parser("gui")
    parser_gui.set_defaults(func=func_gui)

    parser_player = subparsers.add_parser("player")
    parser_player.add_argument("uri", type=str, help="Your Roblox token to join a game")
    parser_player.set_defaults(func=func_player)

    parser_studio = subparsers.add_parser("studio")
    parser_studio.add_argument(
        "uri",
        nargs="?",
        type=str,
        help="The URI or file to open roblox studio with",
        default=None
    )

    parser_studio.set_defaults(func=func_studio)

    args = parser.parse_args(in_args[1:])

    if hasattr(args, "func"):
        f: callable = getattr(args, "func")
        return f(args) or 0

    else:
        parser.print_help()

    return 1


if __name__ == "__main__":
    sys.exit(main())
