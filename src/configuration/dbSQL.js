import { config } from "./configSQL.js";
import knex from 'knex';

export const db = knex(config)
