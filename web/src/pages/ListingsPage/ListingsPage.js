import { MetaTags } from '@redwoodjs/web'

import DoggoListingsCell from 'src/components/DoggoListingsCell'

const ListingsPage = () => {
  return (
    <>
      <MetaTags title="Listings" description="Listings page" />

      <h1>ListingsPage</h1>
      <DoggoListingsCell />
    </>
  )
}

export default ListingsPage
