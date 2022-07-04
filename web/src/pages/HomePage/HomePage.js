import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <>
        <ArticlesCell />
      </>
    </>
  )
}

export default HomePage
