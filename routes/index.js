import { eq } from 'drizzle-orm'
import * as model from '../drizzle-tables.js'
import * as jsonSchemas from '../schemas.js'

async function routes (fastify, options) {
  fastify.get('/users', async (request, reply) => {
    const users = await fastify.drizzle.select().from(model.users)
    return users
  })
  fastify.post('/users', { schemas: jsonSchemas.createUser } , async (request, reply) => {
    const newUser = {
      fullName: request.body.name
    }
    await fastify.drizzle.insert(model.users).values(newUser)
    return fastify.drizzle.select().from(model.users).where(eq(model.users.fullName, newUser.fullName))
  })

  fastify.get('/test-env/:env', async (request, reply) => {
    const { env } = request.params
    return process.env[env] || `env '${env}' not found`
  })
}

export default routes;