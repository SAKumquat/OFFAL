import { config } from "dotenv";

config();

export const ENV = process.env.ENV;
export const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
export const CLIENT_ID = process.env.CLIENT_ID;
export const GUILD_ID = process.env.GUILD_ID;
export const ROLE_NAME = process.env.ROLE_NAME;
export const SOMETHINGAWFUL_PASSWORD_HASH =
  process.env.SOMETHINGAWFUL_PASSWORD_HASH;
export const SOMETHINGAWFUL_USERNAME = process.env.SOMETHINGAWFUL_USERNAME;
