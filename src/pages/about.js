import React from 'react'
import Layout from '../components/layout'

import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/vincebanner.jpg'
import AboutInfo from '../components/AboutPageComponent/AboutInfo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Vince's`, `cheesesteak`, `Allentown,PA`]} />
    <PageHeader img={aboutImg}>
      <Banner title="About Us" />
    </PageHeader>
    <AboutInfo />
  </Layout>
)

export default AboutPage
