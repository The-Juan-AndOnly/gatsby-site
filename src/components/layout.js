import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
// import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/globals/navbar'
import Footer from './globals/Footer'
// Destructure children out of props
const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
// GlobalStyle for all the pages in the project
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background: #fff;
    color: #333;
  }
`
