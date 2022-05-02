import Knex from "knex";
import config from "../config";
import knexConfig from "./knexfile";

const db = Knex(knexConfig[config.nodeEnv]);

export default db;