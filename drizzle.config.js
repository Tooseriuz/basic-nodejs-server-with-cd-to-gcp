import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './schemas.js',
  out: './db/migration/script',
  dialect: 'postgresql',
  dbCredentials: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'test',
    database: 'main',
  },
});