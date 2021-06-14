import { css } from '@emotion/core'
import Theme from '../Theme/Theme'

export const EntryMeta = css`
  float: none;
  display: block;
  padding-bottom: 0;
  margin-bottom: 0;
  max-width: none;
  width: 100%;
  font-size: ${Theme.fonts.sizes.xs};
  color: ${Theme.colors.grays.textDark};
  font-weight: 400;
  line-height: ${Theme.fonts.sizes.lineHeights.lg};
  text-align: center;

  &.left {
    text-align: left;
  }

  > span {
    display: block;
    text-align: center;
    display: inline-block;
    margin: 0 8px 5px auto;
    display: inline-block;
    max-width: none;

    &.posted-in {
      margin-right: 3px;
    }

    &.posted-on time {
      margin-left: 0;
      padding-left: 5px;
      border: 0;
    }
  }

  a,
  .entry-date {
    padding: 0 8px;
    margin: 0 2px;
    border: 1px solid ${Theme.colors.grays.borderMedium};
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: .03em;
    font-weight: 800;
    color: ${Theme.colors.grays.textDarkest};
    display: inline-block;
    line-height: 1.8;
    -webkit-transition: color 0.1s, background-color .2s, border-color .2s; transition: color 0.1s, background-color .2s, border-color .2s;

    &:link,
    &:visited { color: ${Theme.colors.grays.textDarkest};}
  }

  a:hover,
  a:focus {
    color: #345;
    border-color: #345;
  }

  h3 {
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .15em;
    color: #DDE4E6;
  }
`

