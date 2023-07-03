import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

type DatabaseConfig = {
  connectionString: string;
  ssl?: boolean;
}

const configDatabase: DatabaseConfig = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.MODE === "prod") {
  configDatabase.ssl = true;
}

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const connection = new Pool({
  host: DB_HOST || "localhost",
  port: +DB_PORT || 5432,
  user: DB_USER || "postgres",
  password: DB_PASSWORD || "1925jm",
  database: DB_NAME || "transactions",
  ...configDatabase,
});