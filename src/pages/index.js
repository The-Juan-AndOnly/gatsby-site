import React from 'react'
// import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/cheesesteak1.jpg'
import QuickInfo from '../components/HomePageComponent/QuickInfo'
import Gallery from '../components/HomePageComponent/Gallery-1'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Vince's" subTitle="Famous Cheesesteak">
        <BannerButton>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
