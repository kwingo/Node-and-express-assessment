{
  "development": {
    "client": "pg",
    "connection": "YOUR_DEVELOPMENT_DATABASE_URL",
    "migrations": {
      "directory": "./api/db/migrations"
    },
    "seeds": {
      "directory": "./api/db/seeds"
    }
  },
  "production": {
    "client": "pg",
    "connection": "YOUR_PRODUCTION_DATABASE_URL",
    "pool": { "min": 2, "max": 10 },
    "migrations": {
      "directory": "./api/db/migrations"
    },
    "seeds": {
      "directory": "./api/db/seeds"
    }
  }
}