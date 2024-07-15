import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify()

app.get('/test', () => {
  return 'hello world' 
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server running')
})