import Fastify from 'fastify'
import routes from './routes/index.js'
import db from './db/index.js'

const fastify = Fastify({
  logger: true
})

fastify.register(db)
fastify.register(routes)

const start = async () => {
  try {
    await fastify.listen({ port: 8888 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()