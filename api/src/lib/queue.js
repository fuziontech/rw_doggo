import Queue from 'bull'

export const updateQueue = new Queue('updateQueue', {
  redis: { url: process.env.REDIS_URL, socket: { family: 6 } },
})
