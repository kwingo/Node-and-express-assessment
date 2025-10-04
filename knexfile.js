// knexfile.js (at project root)
require("dotenv").config();

const {
  NODE_ENV = "development",
  DATABASE_URL,               // set on Render
  DEVELOPMENT_DATABASE_URL,   // optional for local dev
} = process.env;

const development = {
  client: "pg",
  connection: DEVELOPMENT_DATABASE_URL || DATABASE_URL || "postgres://localhost/yourdb",
  migrations: { directory: __dirname + "/api/db/migrations" },
  seeds: { directory: __dirname + "/api/db/seeds" },
};

const production = {
  client: "pg",
  connection: {
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // typical for Render Postgres
  },
  pool: { min: 2, max: 10 },
  migrations: { directory: __dirname + "/api/db/migrations" },
  seeds: { directory: __dirname + "/api/db/seeds" },
};

module.exports = { development, production };
