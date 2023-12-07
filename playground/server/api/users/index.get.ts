import { defineEventHandler } from "#imports"
import { memoryCache } from "~/server/cache"
export default defineEventHandler(async () => {
  const users = await memoryCache.get('users')
  return users;
})
