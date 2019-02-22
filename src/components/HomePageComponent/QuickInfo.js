import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils/'
import styled from 'styled-components'
import { Link } from 'gatsby'

class QuickInfo extends Component {
  render () {
    return (
      <Section>
        <Title message="Hello Yo Momma" title="Yo Momma so Ugly" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            praesentium ducimus soluta? Dolore, molestiae! Beatae ducimus eos
            nulla alias eligendi, dolor ipsam numquam. Eos, sapiente quo modi
            minima deserunt est!
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 1.75rem;
    color: #333;
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
