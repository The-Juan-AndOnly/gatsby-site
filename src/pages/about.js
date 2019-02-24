import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/vincebanner.jpg'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Vince's`, `cheesesteak`, `Allentown,PA`]} />
    <PageHeader img={aboutImg}>
      <Banner title="About Us" />
    </PageHeader>
  </Layout>
)

export default AboutPage
