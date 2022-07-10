import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const doggos = () => {
  return db.doggo.findMany()
}

export const doggo = ({ id }) => {
  return db.doggo.findUnique({
    where: { id },
  })
}

export const createDoggo = ({ input }) => {
  return db.doggo.create({
    data: input,
  })
}

export const updateDoggo = ({ id, input }) => {
  return db.doggo.update({
    data: input,
    where: { id },
  })
}

export const deleteDoggo = ({ id }) => {
  return db.doggo.delete({
    where: { id },
  })
}

export const upsertDoggo = (upsertDoggo) => {
  const doggo = db.doggo
    .upsert({
      where: {
        id: upsertDoggo.id,
      },
      update: upsertDoggo,
      create: upsertDoggo,
    })
    .catch((err) => {
      logger.error(err)
    })
  if (doggo.updatedAt == doggo.createdAt) {
    return true
  } else {
    return false
  }
}

// Function that takes list of listed doggos and finds doggos in the database that are not in the list of doggos
export const updateAdoptedDoggos = (ids) => {
  db.doggo
    .findMany({
      where: {
        adoptedAt: null,
      },
      select: {
        id: true,
      },
    })
    .then((dogs) => {
      const knownIds = dogs.map((doggo) => doggo.id)
      const missingIds = knownIds.filter((id) => !ids.includes(id))
      missingIds.forEach((id) => {
        db.doggo
          .update({
            where: {
              id,
            },
            data: {
              adoptedAt: new Date(),
            },
          })
          .catch((err) => {
            logger.error(err)
          })
      })
    })
}

export const adoptedDoggos = () => {
  return db.doggo.findMany({
    where: {
      adoptedAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    },
  })
}

export const availableDoggos = () => {
  return db.doggo.findMany({
    where: {
      adoptedAt: null,
    },
  })
}

// function to find dogs created in the last 24 hours
export const recentDoggos = () => {
  return db.doggo.findMany({
    where: {
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    },
  })
}
