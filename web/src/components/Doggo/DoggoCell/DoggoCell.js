import Doggo from 'src/components/Doggo/Doggo'

export const QUERY = gql`
  query FindDoggoById($id: Int!) {
    doggo: doggo(id: $id) {
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

export const Empty = () => <div>Doggo not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ doggo }) => {
  return <Doggo doggo={doggo} />
}
