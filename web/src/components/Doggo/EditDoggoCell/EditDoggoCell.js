import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DoggoForm from 'src/components/Doggo/DoggoForm'

export const QUERY = gql`
  query EditDoggoById($id: Int!) {
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
const UPDATE_DOGGO_MUTATION = gql`
  mutation UpdateDoggoMutation($id: Int!, $input: UpdateDoggoInput!) {
    updateDoggo(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ doggo }) => {
  const [updateDoggo, { loading, error }] = useMutation(UPDATE_DOGGO_MUTATION, {
    onCompleted: () => {
      toast.success('Doggo updated')
      navigate(routes.doggos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDoggo({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Doggo {doggo.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DoggoForm
          doggo={doggo}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
