import React from 'react'
import Layout from '../components/layout'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/vincebanner.jpg'

import SEO from '../components/seo'
const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`Vince's`, `cheesesteak`, `Allentown,PA`]}
    />
    <PageHeader img={contactImg}>
      <Banner title="Contact Us" />
    </PageHeader>
  </Layout>
)

export default ContactPage
