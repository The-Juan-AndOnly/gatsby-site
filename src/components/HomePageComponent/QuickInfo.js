import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils/'
import styled from 'styled-components'
import { Link } from 'gatsby'

class QuickInfo extends Component {
  render () {
    return (
      <Section>
        <Title
          message="An Allentown Original"
          title="A Lehigh Valley Tradition"
        />
        <QuickInfoWrapper>
          <p className="text">
            Food trucks, catering, and more! A Lehigh Valley, Pennsylvania
            tradition since 1957, Vince&rsquo;s is available for all your
            catering and mobile food solutions!!
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
