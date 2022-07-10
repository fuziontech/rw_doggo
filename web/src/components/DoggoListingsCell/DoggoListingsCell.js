import DoggoListing from 'src/components/DoggoListing'

export const QUERY = gql`
  query findAvailableDoggos {
    availableDoggos {
      id
      title
      gender
      weightCategory
      species
      breed
      color
      location
      site
      permalink
      jsonThumbsUrls
      age
      adoptedAt
      lastSeenAt
      createdAt
      updatedAt
      deletedAt
    }
    recentDoggos {
      id
      title
      gender
      weightCategory
      species
      breed
      color
      location
      site
      permalink
      jsonThumbsUrls
      age
      adoptedAt
      lastSeenAt
      createdAt
      updatedAt
      deletedAt
    }
    adoptedDoggos {
      id
      title
      gender
      weightCategory
      species
      breed
      color
      location
      site
      permalink
      jsonThumbsUrls
      age
      adoptedAt
      lastSeenAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ availableDoggos, recentDoggos, adoptedDoggos }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h4 className="text-4xl">🥺 Recently adopted Doggos 🏡</h4>
      <p>{adoptedDoggos.length} adopted doggos</p>
      <div className="row">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {adoptedDoggos.map((item) => {
            return <DoggoListing key={item.id} doggo={item} />
          })}
        </ul>
      </div>
      <h4 className="text-4xl">new doggos 🐕</h4>
      <p>There are {recentDoggos.length} NEW DOGGOS</p>
      <div className="row">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recentDoggos.map((item) => {
            return <DoggoListing key={item.id} doggo={item} />
          })}
        </ul>
      </div>
      <h4 className="text-4xl">available doggos 🐶</h4>
      <p>There are {availableDoggos.length} doggos here</p>
      <div className="row">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {availableDoggos.map((item) => {
            return <DoggoListing key={item.id} doggo={item} />
          })}
        </ul>
      </div>
    </div>
  )
}
