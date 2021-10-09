// Update with your config settings.

export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./services/db/dev.sqlite3",
    },
    migrations: {
      directory: "./services/db/migrations/",
    },
  },

  staging: {
    client: "sqlite3",
    connection: {
      filename: "./services/db/offal.sqlite3",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./services/db/migrations/",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./services/db/offal.sqlite3",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./services/db/migrations/",
      tableName: "knex_migrations",
    },
  },
};
