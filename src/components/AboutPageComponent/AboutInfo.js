import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils/'
import styled from 'styled-components'
import { Link } from 'gatsby'

class AboutInfo extends Component {
  render () {
    return (
      <Section>
        <Title
          message="An Allentown Original"
          title="A Lehigh Valley Tradition"
        />
        <AboutInfoWrapper>
          <p className="text">
            <span className="big-green-text">Since</span> 1957, the
            Vince&rsquo;s family has worked to make our cheesesteaks, sausages,
            and other food concessions a popular choice in the Lehigh Valley and
            beyond. Today, we&rsquo;re blessed to be a six-decade,
            five-generation (and counting) family business rooted in a region
            we&rsquo;re proud to call home. The Vince&rsquo;s family owns and
            operates the business and is grateful for our many friends and
            patrons. We&rsquo;re proud of the tradition you&rsquo;ve helped us
            build across the Valley and beyond, and look forward to serving you
            as often as you give us the honor of your business.
          </p>
          <p className="text">
            <span className="big-green-text">Over</span> the years, we&rsquo;ve
            connected with many customers through our concession stands and new
            concepts, including our Pennsylvania German brand, Das Wurst Haus, a
            specialty sausage destination at the annual Kutztown Folk Festival.
            Your support of that event and your annual visits at the Allentown
            and Bloomsburg Fairs and other regional events continue to mean the
            world to us.
          </p>
        </AboutInfoWrapper>
      </Section>
    )
  }
}

const AboutInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 1.75rem;
    color: #333;
    word-spacing: 0.2rem;
    margin: 2rem 0;
  }

  .big-green-text {
    color: green;
    font-size: 1.5rem;
    font-weight: 500;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default AboutInfo
