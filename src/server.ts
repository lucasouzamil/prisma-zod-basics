import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './rotes/memories'

const app = fastify()

app.register(cors, {
  origin: true
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running on http://localhost:3333/hello 😁')
  })
