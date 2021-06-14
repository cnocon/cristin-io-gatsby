// import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from "../Theme/Theme"

export const PortfolioItem = css`
  padding-bottom: 3rem;
  padding-top: 3rem;
  border-bottom: 1px solid ${Theme.colors.grays.borderMedium};

  &:last-of-type {
    border-bottom: 0;
  }

  .screenshot {
    border: 3px solid ${Theme.colors.grays.border};
    max-width: 300px;
    margin-right: auto;
  }

  a {
    text-decoration: underline;
    color: ${Theme.colors.default.base};

    &:hover {
      text-decoration: none;
    }
  }

  div:not(.github-stats-card) h4 {
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.headings.family};
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: ${Theme.fonts.sizes.lineHeights.default};
  }

  h4 {
    a, 
    span {
      font-family: ${Theme.fonts.body.family};
      letter-spacing: unset;
      font-weight: 400;
      text-transform: none;
      text-decoration: underline;
    }

    span { text-decoration: none;}
  }

  .github-stats-card {
    header h4 {
      text-transform: none;
      letter-spacing: unset;
      font-weight:  400;
      font-family: inherit;
    }
  }
`