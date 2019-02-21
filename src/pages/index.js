import React from 'react'
// import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from '../components/layout'
import { FaBeer } from 'react-icons/fa'
// import Image from "../components/image"
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h3>Hello from Gatsby</h3>
    <ButtonWrapper>Click Me</ButtonWrapper>
  </Layout>
)

const ButtonWrapper = styled.button`
  background: #333;
  color: #fff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`

export default IndexPage
