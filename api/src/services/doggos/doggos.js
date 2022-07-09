import { db } from 'src/lib/db'

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
