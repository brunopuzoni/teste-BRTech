// Update with your config settings.

module.exports = {

  development: {
    client: "sqlite3",
    connection: { filename: "./todo.db" },
    useNullAsDefault: true,
    migrations: { directory: `${__dirname}/src/db/migrations` },
    seeds: { directory: `${__dirname}/src/db/seeds`}
  }
};
