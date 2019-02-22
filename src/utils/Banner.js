import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Banner = ({ title, subTitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subTitle">{subTitle}</h3>
      {children}
    </BannerWrapper>
  )
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  children: PropTypes.node
}

Banner.defaultProps = {
  title: 'default title'
}

const BannerWrapper = styled.div`
  text-align: center;
  font-family: 'PT Serif';
  margin-bottom: 3rem;

  .title {
    font-size: 4rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }
  .subTitle {
    font-size: 1.75rem;
    text-transform: capitalize;
  }
`
export default Banner
