import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_DOGGO_MUTATION = gql`
  mutation DeleteDoggoMutation($id: Int!) {
    deleteDoggo(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Doggo = ({ doggo }) => {
  const [deleteDoggo] = useMutation(DELETE_DOGGO_MUTATION, {
    onCompleted: () => {
      toast.success('Doggo deleted')
      navigate(routes.doggos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete doggo ' + id + '?')) {
      deleteDoggo({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Doggo {doggo.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{doggo.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{doggo.title}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{doggo.gender}</td>
            </tr>
            <tr>
              <th>Weight category</th>
              <td>{doggo.weightCategory}</td>
            </tr>
            <tr>
              <th>Species</th>
              <td>{doggo.species}</td>
            </tr>
            <tr>
              <th>Breed</th>
              <td>{doggo.breed}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{doggo.color}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{doggo.location}</td>
            </tr>
            <tr>
              <th>Site</th>
              <td>{doggo.site}</td>
            </tr>
            <tr>
              <th>Permalink</th>
              <td>{doggo.permalink}</td>
            </tr>
            <tr>
              <th>Json thumbs urls</th>
              <td>{jsonDisplay(doggo.jsonThumbsUrls)}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{doggo.age}</td>
            </tr>
            <tr>
              <th>Adopted at</th>
              <td>{timeTag(doggo.adoptedAt)}</td>
            </tr>
            <tr>
              <th>Last seen at</th>
              <td>{timeTag(doggo.lastSeenAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(doggo.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(doggo.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(doggo.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDoggo({ id: doggo.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(doggo.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Doggo
