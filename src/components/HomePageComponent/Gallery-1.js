/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Section, styles } from '../../utils'
import Img from 'gatsby-image'

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "HomeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const Gallery = () => {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        return (
          <Section style={{ maxWidth: '1200px' }}>
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index} className={`item item-${ index + 1 }`}>
                    <Img fluid={node.childImageSharp.fluid} />
                    {/* <p className="info">Awesome Food</p> */}
                  </div>
                )
              })}
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
   
  }
/*
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${ styles.colors.mainYellow };
    padding: 0.1rem 0.25rem;
    letter-spacing: 0.1rem;
    border-radius: 5px;
  } */

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-areas:
      'one one two'
      'one one three';
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
