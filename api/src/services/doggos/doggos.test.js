import { doggos, doggo, createDoggo, updateDoggo, deleteDoggo } from './doggos'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('doggos', () => {
  scenario('returns all doggos', async (scenario) => {
    const result = await doggos()

    expect(result.length).toEqual(Object.keys(scenario.doggo).length)
  })

  scenario('returns a single doggo', async (scenario) => {
    const result = await doggo({ id: scenario.doggo.one.id })

    expect(result).toEqual(scenario.doggo.one)
  })

  scenario('creates a doggo', async () => {
    const result = await createDoggo({
      input: {
        gender: 'String',
        weightCategory: 'String',
        species: 'String',
        breed: 'String',
        color: 'String',
        location: 'String',
        site: 'String',
        permalink: 'String',
        jsonThumbsUrls: { foo: 'bar' },
        jsonThumbs: { foo: 'bar' },
        age: 'String',
      },
    })

    expect(result.gender).toEqual('String')
    expect(result.weightCategory).toEqual('String')
    expect(result.species).toEqual('String')
    expect(result.breed).toEqual('String')
    expect(result.color).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.site).toEqual('String')
    expect(result.permalink).toEqual('String')
    expect(result.jsonThumbsUrls).toEqual({ foo: 'bar' })
    expect(result.jsonThumbs).toEqual({ foo: 'bar' })
    expect(result.age).toEqual('String')
  })

  scenario('updates a doggo', async (scenario) => {
    const original = await doggo({ id: scenario.doggo.one.id })
    const result = await updateDoggo({
      id: original.id,
      input: { gender: 'String2' },
    })

    expect(result.gender).toEqual('String2')
  })

  scenario('deletes a doggo', async (scenario) => {
    const original = await deleteDoggo({ id: scenario.doggo.one.id })
    const result = await doggo({ id: original.id })

    expect(result).toEqual(null)
  })
})
