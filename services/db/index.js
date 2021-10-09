import knex from "knex";
import knexFile from "../../knexfile.js";
import { ENV } from "../../constants.js";

export const createDbConnection = () => {
  const db = knex({ ...knexFile[ENV], useNullAsDefault: true });

  return db;
};

const db = createDbConnection();

export const getOffalCodeByDiscordId = (discordId) => {
  return db("users")
    .select("offal_code")
    .where({ discord_user_id: discordId })
    .first();
};

export const insertOffalCode = (discordId, offalCode) => {
  return db("users").insert({
    discord_user_id: discordId,
    offal_code: offalCode,
  });
};

export const getExistingUsers = (userId, discordId) => {
  return db("users")
    .where({ sa_user_id: userId })
    .whereNot({ discord_user_id: discordId })
    .count("id as count")
    .first();
};

export const bindUserToDiscordId = (discordId, offalCode, userId) => {
  return db("users")
    .where({ discord_user_id: discordId, offal_code: offalCode })
    .update({ sa_user_id: userId });
};
