export const schema = gql`
  type Doggo {
    id: Int!
    title: String
    gender: String!
    weightCategory: String!
    species: String!
    breed: String!
    color: String!
    location: String!
    site: String!
    permalink: String!
    jsonThumbsUrls: JSON!
    age: String!
    adoptedAt: DateTime
    lastSeenAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    doggos: [Doggo!]! @skipAuth
    doggo(id: Int!): Doggo @skipAuth
    findAdoptedDoggos: [Doggo!]! @skipAuth
    findAvailableDoggos: [Doggo!]! @skipAuth
    findRecentDoggos: [Doggo!]! @skipAuth
  }

  input CreateDoggoInput {
    title: String
    gender: String!
    weightCategory: String!
    species: String!
    breed: String!
    color: String!
    location: String!
    site: String!
    permalink: String!
    jsonThumbsUrls: JSON!
    age: String!
    adoptedAt: DateTime
    lastSeenAt: DateTime
    deletedAt: DateTime
  }

  input UpdateDoggoInput {
    title: String
    gender: String
    weightCategory: String
    species: String
    breed: String
    color: String
    location: String
    site: String
    permalink: String
    jsonThumbsUrls: JSON
    age: String
    adoptedAt: DateTime
    lastSeenAt: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createDoggo(input: CreateDoggoInput!): Doggo! @requireAuth
    updateDoggo(id: Int!, input: UpdateDoggoInput!): Doggo! @requireAuth
    deleteDoggo(id: Int!): Doggo! @requireAuth
  }
`
