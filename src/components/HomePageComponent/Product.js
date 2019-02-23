import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Product = ({ product }) => {
  const { name, price, ingredients } = product
  const { fixed } = product.image

  return (
    <ProductWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">{price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

Product.propTypes = {
  product: PropTypes.object
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

  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: capitalize;
    font-size: 0.85rem;
  }

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
`

export default Product
