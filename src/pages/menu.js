import React from 'react'
import Layout from '../components/layout'
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/HomeGallery/cheesesteak2.jpg'

import SEO from '../components/seo'

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" keywords={[`Vince's`, `cheesesteak`, `Allentown,PA`]} />
    <PageHeader img={menuImg}>
      <Banner title="Menu" />
    </PageHeader>
  </Layout>
)

export default MenuPage
