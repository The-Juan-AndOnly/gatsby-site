import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook" />,
        path: 'https://www.facebook.com/vincescheesesteaks'
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter" />,
        path: 'https://twitter.com/vincessteaks'
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram" />,
        path: 'https://www.instagram.com/vincescheesesteaks/'
      }
    ]
  }
  render () {
    return (
      <FooterWrapper>
        <div className="icons">
          {this.state.icons.map(icon => {
            return (
              <a
                key={icon.id}
                href={icon.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.icon}
              </a>
            )
          })}
        </div>
        <p className="copyright">
          copyright &copy; 2019 Vince&rsquo;s Cheesesteaks
        </p>
      </FooterWrapper>
    )
  }
}
const FooterWrapper = styled.footer`
  padding: 2rem 0;

  color: ${ styles.colors.mainYellow2 };
  background: ${ styles.colors.mainBlack };
  text-align: center;

  .icons {
    display: flex;
    width: 10rem;
    justify-content: space-between;
    margin: 1rem auto;
  }

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    ${ styles.transObject({}) };

    &.facebook {
      color: #3b5998;
    }
    &.twitter {
      color: #1dcaff;
    }
    &.instagram {
      color: #da5f53;
    }
  }
  .icon:hover {
    color: ${ styles.colors.mainYellow };
  }

  .copyright {
    text-transform: capitalize;
  }
`

export default Footer
