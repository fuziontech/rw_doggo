import { Link, routes } from '@redwoodjs/router'

import Doggos from 'src/components/Doggo/Doggos'

export const QUERY = gql`
  query FindDoggos {
    doggos {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No doggos yet. '}
      <Link to={routes.newDoggo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ doggos }) => {
  return <Doggos doggos={doggos} />
}
