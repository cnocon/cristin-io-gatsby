import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: ${Theme.spacing.md} 0;

  @media all and (max-width: ${Theme.breakpoints.max.md}) {
    margin: ${Theme.spacing.xxs} auto;
    padding-left: 0;
    flex-wrap: wrap;
  }

  &.wrap,
  &.wrap-more {
    flex-wrap: wrap;
    padding-left: 0;
  }
`