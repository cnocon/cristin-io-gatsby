import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Theme from '../Theme/Theme'

export const ImageColumn = styled.div`
  padding: ${Theme.spacing.default} ${Theme.spacing.xs} ${Theme.spacing.md};
  margin: 2rem 1rem;
  background: #fff;
  display: inline-block;
  text-align: center;
  padding: 0;

  &::before {
    display: none !important;
  }

  @media all and (max-width: ${Theme.breakpoints.max.sm}) {
    margin: 2rem auto 4rem;
  }
`

export const ImageColumnHeading = styled.h2`
  display: block;
  margin: 0 auto ${Theme.spacing.sm};
  font-weight: 200;
  padding: 0;
  color: ${Theme.colors.default.base};
  font-size: ${Theme.fonts.sizes.sm};
  font-family: ${Theme.fonts.headings.family};
  line-height: ${Theme.fonts.sizes.lineHeights.lg};
  letter-spacing: 1px;
  font-weight: 300;
  letter-spacing: .25px;
  text-align: left;

  a {
    display: inline-block;
    width: calc(100% - 5rem);
    float: left;
    color: inherit;
    line-height: ${Theme.fonts.sizes.lineHeights.md};
    font-family: ${Theme.fonts.headings.family};
    font-weight: 600;
    text-decoration: none;
    transition: box-shadow .2s;
    font-size: 18px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 14px;
    margin-bottom: 15px;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`

export const ImageContainer = styled.span`
  display: inline-block;
  float: left;
  width: 4rem;
  height: auto;
  vertical-align: middle;
  margin: 0 1rem 1rem 0;

  img {
    display: inline-block;
    height: auto;
    vertical-align: middle;
    margin: 0 auto;
    text-align: center;
    line-height: calc(100% - 14px);
  }
`

export const Date = styled.time`
  display: inline-block;
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.default};  
  font-weight: 700;
  letter-spacing: .25px;
  text-align: left;
  float: left;
  margin-right: .5rem;
  color: ${Theme.colors.default.base};
`

export const Paragraph = css`
  font-size: ${Theme.fonts.sizes.default};
  line-height: ${Theme.fonts.sizes.lineHeights.default};
  text-align: left;
  margin: 0 auto;
  color: ${Theme.colors.grays.textDarkest};

  span {
    float: left;
  }
`
