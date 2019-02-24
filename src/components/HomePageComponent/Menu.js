/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react'
import Product from './Product'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PRODUCTS = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          price
          id
          ingredients
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  return (
    <Section id="menu">
      <Title title="menu" message="popular items" />
      <ProductList>
        <StaticQuery
          query={PRODUCTS}
          render={data => {
            const products = data.items.edges
            return products.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
export default Menu
