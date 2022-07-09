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
    <ul>
      <h4>🥺 Recently adopted Doggos 🏡</h4>
      <p>{adoptedDoggos.length} adopted doggos</p>
      <div className="row">
        <ul>
          {adoptedDoggos.map((item) => {
            return <DoggoListing key={item.id} doggo={item} />
          })}
        </ul>
      </div>
      <h4>new doggos 🐕</h4>
      <p>There are {recentDoggos.length} NEW DOGGOS</p>
      <div className="row">
        <ul>
          {recentDoggos.map((item) => {
            return <DoggoListing key={item.id} doggo={item} />
          })}
        </ul>
      </div>
      <h4>available doggos 🐶</h4>
      <p>There are {availableDoggos.length} doggos here</p>
      <div className="row">
        <ul>
          {availableDoggos.map((item) => {
            return <DoggoListing key={item.id} doggo={item} />
          })}
        </ul>
      </div>
    </ul>
  )
}
