/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Section, styles } from '../../utils'
import Img from 'gatsby-image'

const multipleImages = graphql`
  {
    img1: file(relativePath: { eq: "cheesesteak2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img2: file(relativePath: { eq: "sausage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    img3: file(relativePath: { eq: "pierogi-fries.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Gallery = () => {
  return (
    <StaticQuery
      query={multipleImages}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
                <p className="info">Cheesesteak &amp; Fries </p>
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
                <p className="info">Sausage Sandwiches</p>
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
                <p className="info">Pierogi Fries</p>
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  .gatsby-image-wrapper {
    height: 100%;
  }
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${ styles.colors.mainYellow };
    padding: 0.1rem 0.25rem;
    letter-spacing: 0.1rem;
    border-radius: 5px;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-areas:
      'one one two two'
      'one one three three';
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`

export default Gallery
