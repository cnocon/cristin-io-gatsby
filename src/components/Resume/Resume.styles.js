// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import Theme from '../Theme/Theme'

export const Timeline = styled.div`
  position: relative; 
  padding-left: 112px; 
  padding-bottom: 8px;

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    padding-left: 0;
  }

  h2 {
    position: relative; 
    margin-bottom: 2rem; 
    font-size: ${Theme.fonts.sizes.default}; 
    font-weight: 300; 
    letter-spacing: 1px;

    @media screen and (max-width: ${Theme.breakpoints.max.md}) {
      text-align: center;
    }
    
    &:last-of-type {
      padding-left: 0;
    }
    
    .far,
    .fa,
    .fas,
    .fal,
    .fad {
      display: block;
      font-size: 28px;
      position: absolute;
      top: -27px;
      left: -112px;
      width: 86px;
      line-height: 78px; 
      margin: 0;  
      z-index: 120;

      @media screen and (max-width: ${Theme.breakpoints.max.md}) {
        position: relative;
        top: auto;
        left: auto;
        margin: -12px auto 6px auto;
        border: 0;
        line-height: 1;
        font-size: 16px;
        margin-right: 14px;
        line-height: 39px;
        text-align: center;
        color: #DDE4E6;
        background: #fff;
        border-radius: 50%;
        border: 4px solid ${Theme.colors.grays.border};
        display: inline-block;
        width: 47px;
      }
    }
  }

  .event {
    position: relative;
    padding: 26px 32px;
    margin-bottom: 3em;
    background: #ffffff;
    border: 3px solid #EDF1F3;
    border-radius: 6px;

    @media screen and (max-width: ${Theme.breakpoints.max.md}) {
      margin-top: 15px;

      &.current { 
        margin-top: 15px;
      }

      &:last-child p:before {
        height: 100%;
      }

      &:first-of-type {
        margin-top: 20px;
      }

      &:before, 
      &:after {
        display: none;
      }

      .date {
        display: none;
      }

      h4,
      h5 {
        text-align: center;

        @media screen and (max-width: ${Theme.breakpoints.max.md}) {
          text-align: left !important;
        }
      }

      p:before,
      ul:before {
        left: 50%; 
        z-index: -1;
      }
    }

    &::after, 
    &::before {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &::before {
      border-right-color: #EDF1F3;
      border-width: 15px;
      margin-top: -15px;
    }

    &::after {
      border-right-color: #ffffff;
      border-width: 10px;
      margin-top: -10px;
    }

    .list::before {
      display: block;
      content: "";
      position: absolute;
      top: -30px;
      left: -72px;
      height: 120%;
      width: 4px;
      background: ${Theme.colors.grays.border};
    }

    .award span,
    .award small {
      line-height: 1;
    }

    span,
    small {
      &.range {
        font-weight: 400;
        text-transform: none;
      }
    }
  }
`

export const HistoryHeading = css`
  position: relative;
  font-size: 19px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: ${Theme.fonts.headings.family};
  margin: 35px 0 50px 0;
  text-align: left;
  color: #345;
  padding-left: 112px;
  text-transform: uppercase;


  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    text-transform: uppercase;
    padding-left: 102px;
    text-align: left;

    &:first-of-type i {
      font-size: 43px;
      line-height: 72px;
    }

    &:not(:first-of-type) i {
      width: 86px;
      height: 86px;
      font-size: 43px;
      line-height: 72px;
      background-color: white;
    }
  }
  
  i {
    &::before {
      font-size: 28px;
      line-height: 72px;
      vertical-align: middle;
      color: #EDF1F3;
      z-index: 9999999999;
      font-weight: 400;
      display: block;
      position: absolute;
      top: -27px;
      left: 0px;
      width: 86px;
      line-height: 78px;
      margin: 0;
      z-index: 120;
      text-align: center;
      color: #b7c6c9;
      background: #fff;
      border-radius: 50%;
      border: 4px solid ${Theme.colors.grays.border};
      color: ${Theme.colors.grays.textDark};
    }
  }
`

export const ResumeSectionTitle = css`
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: ${Theme.fonts.headings.family};
  text-align: left;
  display: block;
  margin: 0 0 2rem;
  text-align: left;

  &:first-of-type span {
    margin: 25px 0 30px 0;
    line-height: 37px;
    letter-spacing: 1px;
    opacity: 1;
    color: #345;
    font-family: ${Theme.fonts.headings.family};
    position: relative;
    display: inline-block;
    padding-right: 1em;
    font-size: 12px;
    text-transform: uppercase;
    margin: 25px 0 14px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: 4px;
    width: 100%;
    border-bottom: 4px solid ${Theme.colors.grays.background};
  }

  span {
    position: relative;
    display: inline-block;
    padding-right: 1em;
    background: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: ${Theme.fonts.headings.family};
    text-transform: uppercase;

    i {
      display: inline-block;
      width: 47px;
      height: 47px;
      text-align: center;
      opacity: .8;
      line-height: 37px;
      font-size: ${Theme.fonts.sizes.default};
      margin: 0 ${Theme.spacing.sm} 0 auto;
      font-weight: 400;
      color: ${Theme.colors.grays.textDark};
      border: 4px solid ${Theme.colors.grays.border};
      border-radius: 50%;
      line-height: 39px;
      vertical-align: middle;
      text-indent: 2px;
    }
  }
`

export const LeftCol = css`
  padding-right: 20px;
`

export const RightCol = css`
  padding-left: 20px;

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    padding-left: 15px;
  }

  .event::before,
  .event::after,
  .list::before,
  p::before {
    display: none;
  }

  article:not(:first-of-type) h2 {
    margin: 25px 0 0;
  }

  .card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 3px solid #345;
    border-radius: 6px;
    padding: 0;
    margin: 60px 0;

    @media all and (max-width: 1002px) {
      margin: 60px auto;
    }

	  @media all and (max-width: ${Theme.breakpoints.max.lg}) {
      margin-top: 30px;
      margin-bottom: 40px;
      margin: 60px auto;
      max-width: 500px;
    }

    blockquote {
      position: relative;
      margin: 1.6em 0;
      padding: 0 2em;
      text-align: right;
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: bold;
      letter-spacing: -1px;
      font-family: "Roboto", Monaco, sans-serif;
      line-height: 1.5em;
      padding: 1rem 2em 0;
      
      &::before {
        display: none;
      }
      
      i {
        padding-right: 10px;
      }

      cite {
        display: block;
        font-size: 13px;
        padding-right: 1em;
        margin-top: 1em;
        font-style: normal;
        font-weight: 400;
        color: #ccc;
        letter-spacing: 0.03em;
      }
    }
  }
`

export const Skillset = css`
  padding: 0 0 3.2em 1em;

  .skill-unit {
    padding-bottom: 2rem;

    @media screen and (max-width: ${Theme.breakpoints.max.md}) {
      padding-bottom: 1rem;
    }

    h4 {    
      font-weight: 300;
      font-size: 15px !important;
      position: relative;
      z-index: 100;
      color: ${Theme.colors.default.darker};
      line-height: 1.4em;
      vertical-align: baseline;
      font-family: ${Theme.fonts.headings.family};
      margin: 0 0 .25rem;

      @media screen and (max-width: ${Theme.breakpoints.max.md}) {      
        margin-bottom: 8px;
        padding-left: 0;
      }
    }

    i {
      font-size: 16px;
      vertical-align: baseline;
      line-height: 1.4em;
      margin-right: 3px;
      transform: translateY(1px);
    }

    .bar {
      position: relative;
      background-color: ${Theme.colors.grays.border};
      border: 1px solid transparent;
      width: 100%;
      height: 4px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      display: block;
      outline: 0;

      .progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 4px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        background-color: ${Theme.colors.accents.green};
        background-image: linear-gradient(90deg, 
          ${Theme.colors.accents.background.yellow} 10.5%,
          ${Theme.colors.accents.green} 39.5%, 
          ${Theme.colors.accents.blue} 50%, 
          ${Theme.colors.accents.purple} 67.5%,
          ${Theme.colors.accents.red} 82.5%);
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
      }
    }

    .score {
      position: absolute;
      right: 0;
      bottom: -1px;
      width: 2.7rem;
      height: 2rem;
      background-color: #345;
      color: #fff;
      text-align: center;
      line-height: 2rem;
      font-weight: 700;
      font-size: 1rem;
      font-family: ${Theme.fonts.body.family};
      border-top-right-radius: 2px;
      border-top-left-radius: 2px;
    }
  }
`

export const BlockquoteIcon = css`
  color: ${Theme.colors.grays.text};
`

export const Asset = styled.li`
  list-style: none;
  font-size: 16px;
  font-weight: 300;
  font-family: Roboto;
  color: ${Theme.colors.default.base};
  line-height: 1.4;
  margin-left: 0;
  padding-bottom: 10px;

  i, span {
    display: table-cell;
  }

  i {
    padding-right: 10px;
    font-size: 16px;
    color: ${Theme.colors.accents.dark.green};
    font-weight: 400;
  }

  b {
    font-weight: 400;
  }
}
`
export const AssetList = styled.ul`
  display: inline-block;
  margin: ${Theme.spacing.default} 0 ${Theme.spacing.xl};
`