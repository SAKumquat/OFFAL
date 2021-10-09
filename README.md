# OFFAL
The OFFline Authentication Laborer is a Discord bot that provides commands for authenticating Something Awful Forums accounts built using Javascript.

# Usage
You will have to log into the Discord Developer Portal and create an App + Bot. 

Populate a `.env` file based on `sample.env` using your application's Client Id, Discord Token, and the Server (Guild) Id you wish to have the bot in. `ROLE_NAME` should be the name of the Discord Role in your server you want to be applied to authenticated users.

Running the discord bot itself should be as simple as `yarn install` followed by `yarn start`.

# Operation
OFFAL provides two commands currently
  - `/generate` provides the user with a unique id to be placed in the Location field of their profile.
  - `/auth` takes the user's id and scrapes their profile for the id provided by generate. Auth will check if the provided userId has already been associated with a separate Discord User before authenticating.

# Environment Variable Deep Dive
```
# Available either in the Discord Developer Portal 
DISCORD_TOKEN=666
CLIENT_ID=666
# Available in your server settings menu
GUILD_ID=666
# The role you want to be assigned to authenticated users
ROLE_NAME=isgoon
# Your,, or someone's? SA username and hashed password
# (available in your browsers cookies after logging into SA)
SOMETHINGAWFUL_USERNAME=pusher
SOMETHINGAWFUL_PASSWORD_HASH=shover
# Honestly you can just leave this one
ENV=production
```
