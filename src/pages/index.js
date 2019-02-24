import React from 'react'
// import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/cheesesteak1.jpg'
import QuickInfo from '../components/HomePageComponent/QuickInfo'
import Gallery from '../components/HomePageComponent/Gallery-1'
import Menu from '../components/HomePageComponent/Menu'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Vince's`, `cheesesteak`, `Allentown,PA`]} />
    <HomeHeader img={img}>
      <Banner title="Vince's" subTitle="Famous Cheesesteak">
        <Link to="#menu" style={{ textDecoration: 'none' }}>
          <BannerButton>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
