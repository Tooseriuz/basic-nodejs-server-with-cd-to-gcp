import { pgTable, bigserial, varchar } from 'drizzle-orm/pg-core';
export const users = pgTable('users', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  fullName: varchar('full_name', { length: 256 }),
});