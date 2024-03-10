import { loadEnvConfig } from "@next/env";
import "dotenv/config";
import type { Config } from "drizzle-kit";
const dev = process.env.NODE_ENV !== "production";
loadEnvConfig("./", dev);
export default {
  schema: "./lib/db/schema",
  out: "./drizzle",
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL ?? "",
  },
} satisfies Config;
