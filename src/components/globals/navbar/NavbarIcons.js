import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

class NavbarIcons extends Component {
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
  };

  render () {
    return (
      <IconWrapper>
        {this.state.icons.map(icon => {
          return (
            <a
              href={icon.path}
              target="_blank"
              key={icon.id}
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}
export default NavbarIcons

const IconWrapper = styled.div`
  display: none;

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
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 10rem;
  }
`
