import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/about/',
        name: 'about'
      },
      {
        id: 2,
        path: '/menu/',
        name: 'menu'
      },
      {
        id: 3,
        path: '/contact/',
        name: 'contact'
      }
    ]
  };

  render () {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}
export default NavbarLinks

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    color: ${ styles.colors.mainBlack };
  }

  .nav-link:hover {
    background: ${ styles.colors.mainGrey };
    color: ${ styles.colors.mainYellow };
    padding: 0.5rem 1.25rem;
  }
`
