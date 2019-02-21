import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/vince_logo_small.png'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'

class NavbarHeader extends Component {
  render () {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="Vince's logo" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        />
      </HeaderWrapper>
    )
  }
}
const HeaderWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toggle-icon {
    font-size: 1.75rem;
    color: ${ styles.colors.mainYellow };
    cursor: pointer;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

export default NavbarHeader
