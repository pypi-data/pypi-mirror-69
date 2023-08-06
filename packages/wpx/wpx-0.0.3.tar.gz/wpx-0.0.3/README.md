# wpx 💻

Wpx is a wallpaper downloader. That's it.

##### Supported Wallpaper Providers

* [Bing.com](https://www.bing.com/)
* [WallpapersHome](https://wallpapershome.com)

##### Requirements

* Python 3.5+
* (Linux) `python3-gi` (when installing through `pipx` pass `--system-site-packages`)

##### Usage

Get a random image from a WallpapersHome category:

    $ FILENAME=$(wpx wallpapershome '{category: art/anime}' --random)

Get Bing's image of the day:

    $ FILENAME=$(wpx bing -d ~/Pictures/wallpapers --daily)

Or set up a cron to update your background wallaper every hour:

    0 1 * * * ~/.local/bin/wpx -d ~/Pictures/wallpapers --set-desktop --daily bing
