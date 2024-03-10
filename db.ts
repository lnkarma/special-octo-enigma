import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { ExampleTable } from "./lib/db/schema/users";

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB

export const getExampleTable = async () => {
  const selectResult = await db.select().from(ExampleTable);
  console.log("Results", selectResult);
};
