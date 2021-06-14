import { css } from '@emotion/core'
import Theme from '../Theme/Theme'

export const SectionTitle = css`
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: Lato;
  margin: 0 0 1em;
  text-align: left;
  display: block;

  &:first-of-type {
    /* margin: 25px 0 40px 0; */
    /* margin: 25px 0 0 0; */
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: 0;
    width: 100%;
    border-bottom: 4px solid ${Theme.colors.grays.border};
  }

  span {
    position: relative;
    display: inline-block;
    padding-right: 1em;
    background: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 700;
    font-family: Lato, sans-serif;
    text-transform: uppercase;

    i {
      font-size: 16px;
      margin-right: 14px;
      line-height: 37px;
      font-size: inherit;
      width: 47px;
      height: 47px;
      border: 4px solid ${Theme.colors.grays.border};
      text-align: center;
      border-radius: 50%;
      display: inline-block;
      font-size: 18px;

      color: ${Theme.colors.grays.text};
      opacity: .8;

      
    
      &::before {
        display: inline-block;
        margin: 0 auto 0 0;
        text-align: center;
        vertical-align: middle;
          font-weight: 400;
        /* font-weight: normal;
        font-weight: bold;  */
      }

      &.fas::before {
        font-weight: bold;
      }
    }
  }
`

