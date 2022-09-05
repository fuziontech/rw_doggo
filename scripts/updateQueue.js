// To access your database
// Append api/* to import from api and web/* to import from web
import { getAndUpdateDoggosFromSFSPCA } from 'api/src/lib/doggoUpdater'
import { logger } from 'api/src/lib/logger'
import { updateQueue } from 'api/src/lib/queue'
import { schedule } from 'node-cron'

export default async ({ _args }) => {
  schedule('* * * * *', () => {
    updateQueue.add()
  })

  updateQueue.process(async (job, done) => {
    logger.info('Updating list from SFSPCA')
    await getAndUpdateDoggosFromSFSPCA()
    done()
  })
}
