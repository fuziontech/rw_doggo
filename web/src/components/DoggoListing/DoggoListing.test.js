import { render } from '@redwoodjs/testing/web'

import DoggoListing from './DoggoListing'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DoggoListing', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DoggoListing />)
    }).not.toThrow()
  })
})
