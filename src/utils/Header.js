import React from 'react'
import styled from 'styled-components'
import img from '../images/cheesesteak1.jpg'
import PropTypes from 'prop-types'

const HomeHeader = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const PageHeader = ({ img, children }) => {
  return <DefaultHeader img={img}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 90px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${ props => props.img }) no-repeat center center/cover;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ props => props.img }) no-repeat center center/cover fixed;
`

HomeHeader.defaultProps = {
  img
}
HomeHeader.propTypes = {
  img: PropTypes.string,
  children: PropTypes.node
}

PageHeader.defaultProps = {
  img
}

PageHeader.propTypes = {
  img: PropTypes.string,
  children: PropTypes.node
}

export { HomeHeader, PageHeader }
