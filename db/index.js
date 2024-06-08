import fastifyPlugin from 'fastify-plugin'
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const { Client } = pg

const client = new Client({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'test',
  database: process.env.DATABASE_NAME || 'main',
})

async function drizzlePlugin(fastify, options) {
  if (!fastify.drizzle) {
    await client.connect();
    const drizzleCon = drizzle(client)
    fastify.decorate('drizzle', drizzleCon)

    fastify.addHook('onClose', (fastify, done) => {
      drizzleCon.end()
    })
  }
}

export default fastifyPlugin(drizzlePlugin)
