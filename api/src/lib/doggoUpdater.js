import axios from 'axios'

import { upsertDoggo, updateAdoptedDoggos } from 'src/services/doggos/doggos'

export async function getAndUpdateDoggosFromSFSPCA() {
  var doggos = await axios(
    'https://www.sfspca.org/wp-json/sfspca/v1/filtered-posts/get-adoptions?current-term%5Bid%5D=94&current-term%5Btaxonomy%5D=species&ignored-terms%5Bsfspca-adoption-site%5D%5B%5D=74&ignored-terms%5Bsfspca-adoption-site%5D%5B%5D=128&ignored-terms%5Bsfspca-adoption-site%5D%5B%5D=485&ignored-terms%5Bsfspca-adoption-gender%5D%5B%5D=354&order=ASC&orderby=date&page=1&per_page=100'
  )

  var ids = []

  doggos.data.items.map((doggo) => {
    const re = /[0-9]+/
    var id = Number(doggo.permalink.match(re)[0])
    ids.push(id)
    var thumbs = []
    if (Array.isArray(doggo.thumb)) {
      thumbs = doggo.thumb
    } else if (doggo.thumb instanceof Map) {
      doggo.thumb.forEach((v, _) => {
        thumbs.push(v)
      })
    }
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
      jsonThumbsUrls: thumbs,
      lastSeenAt: new Date().toISOString(),
    }
    upsertDoggo(dbDoggo)
  })
  updateAdoptedDoggos(ids)
}
