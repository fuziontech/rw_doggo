import { render } from '@redwoodjs/testing/web'

import ListingsPage from './ListingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ListingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListingsPage />)
    }).not.toThrow()
  })
})
