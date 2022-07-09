import axios from 'axios'

import { logger } from 'src/lib/logger'
import { upsertDoggo, updateAdoptedDoggos } from 'src/services/doggos/doggos'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event, context) => {
  var doggos = await axios(
    'https://www.sfspca.org/wp-json/sfspca/v1/filtered-posts/get-adoptions?current-term%5Bid%5D=94&current-term%5Btaxonomy%5D=species&ignored-terms%5Bsfspca-adoption-site%5D%5B%5D=74&ignored-terms%5Bsfspca-adoption-site%5D%5B%5D=128&ignored-terms%5Bsfspca-adoption-site%5D%5B%5D=485&ignored-terms%5Bsfspca-adoption-gender%5D%5B%5D=354&order=ASC&orderby=date&page=1&per_page=100'
  )

  var ids = []

  doggos.data.items.map((doggo) => {
    const re = /[0-9]+/
    var id = Number(doggo.permalink.match(re)[0])
    ids.push(id)
    var dbDoggo = {
      id: id,
      title: doggo.title,
      gender: doggo.tags.gender,
      weightCategory: doggo.tags['weight-category'],
      species: doggo.tags.species,
      breed: doggo.tags.breed,
      color: doggo.tags.color,
      location: doggo.tags.location,
      site: doggo.tags.site,
      permalink: doggo.permalink,
      age: doggo.age,
      jsonThumbsUrls: doggo.thumb,
      lastSeenAt: new Date().toISOString(),
    }
    upsertDoggo(dbDoggo)
  })
  updateAdoptedDoggos(ids)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(doggos.data),
  }
}
