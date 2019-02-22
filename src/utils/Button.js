import styled from 'styled-components'
import { styles } from '../utils'

const BannerButton = styled.button`
  display: block;
  font-size: 1.5rem;
  padding: 0.5rem 0.75rem;
  border: 2px solid #fff;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 1rem auto;
  background: transparent;
  letter-spacing: 0.25rem;
  color: ${ styles.colors.mainWhite };
  font-weight: 700;
  ${ styles.transition({}) };
  &:hover {
    background: ${ styles.colors.mainBlack };
    color: ${ styles.colors.mainYellow };
    border-color: ${ styles.colors.mainYellow };
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${ styles.colors.mainBlack };
  border: 2px solid ${ styles.colors.mainBlack };
  font-size: 1.25rem;
`

export { BannerButton, SectionButton }
