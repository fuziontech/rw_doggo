import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Doggo/DoggosCell'

const DELETE_DOGGO_MUTATION = gql`
  mutation DeleteDoggoMutation($id: Int!) {
    deleteDoggo(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const DoggosList = ({ doggos }) => {
  const [deleteDoggo] = useMutation(DELETE_DOGGO_MUTATION, {
    onCompleted: () => {
      toast.success('Doggo deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete doggo ' + id + '?')) {
      deleteDoggo({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Gender</th>
            <th>Weight category</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Color</th>
            <th>Location</th>
            <th>Site</th>
            <th>Permalink</th>
            <th>Json thumbs urls</th>
            <th>Json thumbs</th>
            <th>Age</th>
            <th>Adopted at</th>
            <th>Last seen at</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Deleted at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {doggos.map((doggo) => (
            <tr key={doggo.id}>
              <td>{truncate(doggo.id)}</td>
              <td>{truncate(doggo.title)}</td>
              <td>{truncate(doggo.gender)}</td>
              <td>{truncate(doggo.weightCategory)}</td>
              <td>{truncate(doggo.species)}</td>
              <td>{truncate(doggo.breed)}</td>
              <td>{truncate(doggo.color)}</td>
              <td>{truncate(doggo.location)}</td>
              <td>{truncate(doggo.site)}</td>
              <td>{truncate(doggo.permalink)}</td>
              <td>{jsonTruncate(doggo.jsonThumbsUrls)}</td>
              <td>{truncate(doggo.age)}</td>
              <td>{timeTag(doggo.adoptedAt)}</td>
              <td>{timeTag(doggo.lastSeenAt)}</td>
              <td>{timeTag(doggo.createdAt)}</td>
              <td>{timeTag(doggo.updatedAt)}</td>
              <td>{timeTag(doggo.deletedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.doggo({ id: doggo.id })}
                    title={'Show doggo ' + doggo.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDoggo({ id: doggo.id })}
                    title={'Edit doggo ' + doggo.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete doggo ' + doggo.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(doggo.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DoggosList
