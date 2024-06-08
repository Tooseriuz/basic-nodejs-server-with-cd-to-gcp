import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schemas from '../../drizzle-tables.js';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
const { Client } = pg

const client = new Client({
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'test',
  database: process.env.DATABASE_NAME || 'main',
})
async function migrateFunc() {
  await client.connect();
  const db = drizzle(client, { schemas });
  await migrate(db, { migrationsFolder: './db/migration/script' });
  await client.end();
}

await new Promise(resolve => setTimeout(resolve, 5000));
migrateFunc()
