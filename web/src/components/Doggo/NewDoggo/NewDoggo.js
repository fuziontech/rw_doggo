import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DoggoForm from 'src/components/Doggo/DoggoForm'

const CREATE_DOGGO_MUTATION = gql`
  mutation CreateDoggoMutation($input: CreateDoggoInput!) {
    createDoggo(input: $input) {
      id
    }
  }
`

const NewDoggo = () => {
  const [createDoggo, { loading, error }] = useMutation(CREATE_DOGGO_MUTATION, {
    onCompleted: () => {
      toast.success('Doggo created')
      navigate(routes.doggos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDoggo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Doggo</h2>
      </header>
      <div className="rw-segment-main">
        <DoggoForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDoggo
