import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from "../Theme/Theme"

export const LeftBlock = styled.div`
  width: ${Theme.layout.widths.full};
  flex-basis: ${Theme.layout.widths.full};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media all and (min-width: ${Theme.breakpoints.min.sm}) {
    width: 50%;
    flex-basis: 50%;
    align-items: flex-start;
    justify-content: normal;
  }

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    padding-left: 0;
  }
`

export const RightBlock = styled.div`
  width:${Theme.layout.widths.full};
  flex-basis:${Theme.layout.widths.full};
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${Theme.spacing.default};

  @media all and (min-width: ${Theme.breakpoints.min.sm}) {
    width: 50%;
    flex-basis: 50%;
    flex-direction: row;
    align-items: normal;
    justify-content: flex-end;
    text-align: normal;
    margin-top: 0;
  }

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    padding-right: 0;
  }
`

export const FooterInner = styled.div`
  width: 100%;
  max-width: ${Theme.layout.widths.lgMax};
  margin: 0 auto;
  font-size: ${Theme.fonts.sizes.sm};
  display: block;
  text-align: center;

  @media all and (min-width: ${Theme.breakpoints.min.sm}) {
    flex-direction: row;
    text-align: unset;
    justify-content: space-between;
  }

  @media all and (min-width: ${Theme.breakpoints.min.md}) {
    /* padding-left: 40px;
    padding-right: 40px; */
  }
`

export const Footer = styled.footer({
  margin: `4rem 0 0`,
  padding: `4.5rem 0 2.5rem`,
  width: `100%`,
  backgroundColor: `${Theme.colors.grays.background}`,
})

export const paragraph = css`
  margin: 0;
  padding: 0;
  font-size: ${Theme.fonts.sizes.default};
  color: #000;
  font-family: ${Theme.fonts.headings.family};
`

export const smParagraph = css`
  margin: 0 0 3px;
  padding: 0;
  font-size: ${Theme.fonts.sizes.sm};
  color: #000;
  font-family: ${Theme.fonts.headings.family};
`

export const FooterLink = styled.a`
  color: #000;
  text-decoration: underline;
  font-size: inherit;
  font-family: ${Theme.fonts.headings.family};

  &:hover {
    color: #000;
    text-decoration: none;
  }
`

export const flexParagraph = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2px 0 ${Theme.spacing.xs};
  font-size: ${Theme.fonts.sizes.sm};
  color: #000;
  font-family: ${Theme.fonts.headings.family};
`

export const Image = styled.img`
  max-height: 40px;
  max-width:${Theme.layout.widths.full};
  display: block;
`

export const span = css`
  font-size: ${Theme.fonts.sizes.sm};
  font-family: ${Theme.fonts.accent.family};
  font-weight: 400;
  text-transform: uppercase;
`

export const date = css`
  font-family: ${Theme.fonts.headings.family};
  font-weight: 300;
  text-transform: none;
`

export const Row = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media all and (max-width: ${Theme.breakpoints.max.sm}) {
    flex-direction: column;
  }

  ul {
    flex-basis: 100%;
    justify-content: space-between;
    flex-wrap: unset;
    flex-direction: row;
  }
`