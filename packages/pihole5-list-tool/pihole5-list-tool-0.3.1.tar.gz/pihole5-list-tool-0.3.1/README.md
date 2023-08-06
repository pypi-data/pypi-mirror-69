# pihole5-list-tool
[![PyPI version](https://badge.fury.io/py/pihole5-list-tool.svg)](https://badge.fury.io/py/pihole5-list-tool)

This tool allows quickly bulk adding __Whitelists__ and __Black/Block/Ad lists__ to your [Pi-hole 5](https://pi-hole.net/) setup.


#### Whitelists

Currently the only source for maintained whitelists is [anudeepND's whitelist](https://github.com/anudeepND/whitelist). They are presented as:
- __Whitelist Only__ - Domains that are safe to whitelist i.e does not contain any tracking or
        advertising sites. This fixes many problems like YouTube watch history,
        videos on news sites and so on.
- __Whitelist+Optional__ - These are needed depending on the service you use. They may contain some
        tracking site but sometimes it's necessary to add bad domains to make a
        few services to work.
- __Whitelist+Referral__ - People who use services like Slickdeals and Fatwallet need a few sites
        (most of them are either trackers or ads) to be whitelisted to work
        properly. This contains some analytics and ad serving sites like
        doubleclick.net and others. If you don't know what these services are,
        stay away from this list. Domains that are safe to whitelist i.e does
        not contain any tracking or advertising sites. This fixes many problems
        like YouTube watch history, videos on news sites and so on.

#### Ad/Block/Blacklist
Currently the only source for maintained blacklists is [firebog.net](https://firebog.net/)
- Non-crossed lists: For when someone is usually around to whitelist falsely blocked sites
- Ticked lists: For when installing Pi-hole where no one will be whitelisting falsely blocked sites
- All lists: For those who will always be around to whitelist falsely blocked sites

#### File/Paste 
Both list types allow providing either a __pasted in list__ or a __file__ as your source of lists.

#### Finishing up
After adding lists, they must be loaded by running `pihole -g` - this tool will offer to do that for you.

You'll of course see each of them listed in the **Web Admin** interface along with a comment to help identify them

<b>NOTE:</b> If you need/want the blocklists added from [firebog.net](https://firebog.net/) (and more) continually updated, check out [pihole-updatelists](https://github.com/jacklul/pihole-updatelists) which 
will also run great on a Pi.



## requirements
- working [pi-hole 5.0](https://pi-hole.net) installation
- [python 3.6+](https://python.org/) is required. That is available by default on at least Raspbian 10, so it should be available on your system.


## installation
If you don't **sudo pip3 install**, things won't work - possibly in a very confusing way. Definitely on Raspbian 10, so probably before that.

```bash
$ sudo pip3 install pihole5-list-tool --upgrade
```

## running
Simply run:
```bash
$ sudo pihole5-list-tool
```

Here's what installing and running it will look like:

[![asciicast](https://asciinema.org/a/331296.svg)](https://asciinema.org/a/331296)