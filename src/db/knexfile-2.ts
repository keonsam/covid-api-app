import path from "path";
import config from "../config";

const defaults = {
  client: "pg",
  connection: config.connectionString,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.resolve(__dirname, "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "seeds"),
  },
};

const knexConfig = {

  development: {
    ...defaults,
    debug: true,
    useNullAsDefault: true,
  },

  production: {
    ...defaults,
  },
};

export default knexConfig;