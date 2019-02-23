import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'

const Product = ({ product }) => {
  const { name, price } = product
  const { fixed } = product.image

  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  .img {
    border-radius: 0.5rem;
  }

  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  .name {
    color: ${ styles.colors.mainYellow };
    margin-top: 0.5rem;
  }

  .price {
    color: ${ styles.colors.mainYellow };
    margin-top: 0.5rem;
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
`

export default Product
