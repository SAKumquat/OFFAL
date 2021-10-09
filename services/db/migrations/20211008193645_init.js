export const up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("discord_user_id").unique().notNullable();
    table.string("sa_user_id").unique();
    table.string("offal_code").unique();
  });
};

export const down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
