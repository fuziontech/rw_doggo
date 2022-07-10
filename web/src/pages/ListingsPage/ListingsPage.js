import { MetaTags } from '@redwoodjs/web'

import DoggoListingsCell from 'src/components/DoggoListingsCell'

const ListingsPage = () => {
  return (
    <div className="antialiased font-sans bg-gray-200 overflow-hidden">
      <MetaTags title="Listings" description="Listings page" />

      <h1 className="text-5xl font-bold">SF SPCA Doggos!</h1>
      <br></br>
      <DoggoListingsCell />
    </div>
  )
}

export default ListingsPage
