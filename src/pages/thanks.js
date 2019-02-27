import React from 'react'
import Layout from '../components/layout'
import ThanksPage from '../components/ContactPageComponent/ThanksPage'
import SEO from '../components/seo'
const Thanks = () => (
  <Layout>
    <SEO title="Thanks" keywords={[`Vince's`, `cheesesteak`, `Allentown,PA`]} />
    <ThanksPage />
  </Layout>
)

export default Thanks
