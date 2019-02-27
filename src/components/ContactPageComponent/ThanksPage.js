import React from 'react'
import { Section } from '../../utils'
import styled from 'styled-components'

const ThanksPage = () => {
  return (
    <Section>
      <ThanksWrapper>
        <h1>Thank You for your submission</h1>
      </ThanksWrapper>
    </Section>
  )
}

const ThanksWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  min-height: calc(100vh - 92px - 143px);
`
export default ThanksPage
