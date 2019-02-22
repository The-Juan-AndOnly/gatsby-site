import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'
import PropTypes from 'prop-types'

const Title = ({ title, message }) => {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-align: center;

  .message {
    letter-spacing: 0.2rem;
    ${ styles.textSlanted };
    font-size: 2rem;
  }

  .title {
    letter-spacing: 0.2rem;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .underline {
    background: ${ styles.colors.mainYellow };
    height: 0.2rem;
    width: 4.25rem;
    margin: 1rem auto;
  }
`

Title.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
}

Title.defaultProps = {
  title: 'Insert title in Parent',
  message: 'Insert message in Parent'
}

export default Title
