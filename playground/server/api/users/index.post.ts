import { defineEventHandler, readBody } from "#imports"
import { memoryCache } from "~/server/cache"

export default defineEventHandler(async (event) => {
  const { name, email } = await readBody(event)

  const users = await memoryCache.get<Array<any>>('users') ?? []

  users.push({
    name,
    email
  })

  memoryCache.set('users', users)
})
