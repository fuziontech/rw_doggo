import Queue from 'bull'

export const updateQueue = new Queue(
  'updateQueue',
  process.env.REDIS_URL, {
  redis: { socket: { family: 6 } },
})
