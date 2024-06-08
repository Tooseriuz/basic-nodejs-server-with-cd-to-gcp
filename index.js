import Fastify from 'fastify'
import routes from './routes/index.js'
import db from './db/index.js'

const fastify = Fastify({
  logger: true
})

fastify.register(db)
fastify.register(routes)

fastify.listen({ port: process.env.PORT || 8080, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})