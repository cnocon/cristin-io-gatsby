// import React from "react"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import Theme from "../Theme/Theme"

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: ${Theme.fonts.body};

  @media screen and (min-width: ${Theme.breakpoints.min.lg}) {
    width: ${Theme.layout.widths.default};
    max-width: ${Theme.layout.widths.defaultMax};
  }

  .hidden { display: none; }
`

export const Header = styled.header(
  ({theme}) => ({
    backgroundColor: `#fff`,
    zIndex: 200,
    margin: `0 auto`,
    padding: `3rem 0 0`,
    width: `${theme.layout.widths.full}`,
    textAlign: `center`,
    display: 'block',
    boxSizing: 'border-box'
  })
)

export const ImageEl = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0 auto;
  border-radius: 50%;
  display: block;
  border: 4px solid ${Theme.colors.grays.border};

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    height: 10rem;
    width: 10rem;
  }
`

export const Heading1 = styled.h1`
  margin: .9em 0 0 0;
  padding: 0;
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 1.5em;
  -webkit-backface-visibility: hidden;
  font-family: Lato, sans-serif;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: ${Theme.fonts.sizes.md};
  }
`

export const H1Link = styled(Link)`
  display: block;
  font-family: ${Theme.fonts.accent.family};
  color: ${Theme.colors.default.base};
  font-size: ${Theme.fonts.sizes.md};
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    z-index: 0;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg,
      ${Theme.colors.accents.text.yellow} 0%,
      ${Theme.colors.accents.text.green} 10%, 
      ${Theme.colors.accents.text.blue} 30%, 
      ${Theme.colors.accents.text.purple} 50%,
      ${Theme.colors.accents.text.red} 65%,
      ${Theme.colors.accents.text.yellow} 80%);
    
      @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        background-image: none;
        background-clip: unset;
        color: ${Theme.colors.accents.vivid.purple};
    }
  }
`

export const Subhead = styled.p`
  margin: ${Theme.spacing.min} 0 ${Theme.spacing.xxs};
  display: inline-block;
  font-style: italic;
  padding: ${Theme.spacing.min} ${Theme.spacing.sm};
  background-color: ${Theme.colors.accents.background.yellow};
  color: ${Theme.colors.default.base};
  border-radius: ${Theme.spacing.xs};
  font-size: ${Theme.fonts.sizes.default};
  line-height: ${Theme.fonts.sizes.lineHeights.default};
  font-family: ${Theme.fonts.accent.family};
  letter-spacing: 1px;

  @media screen and (max-width: ${Theme.breakpoints.max.sm}) {
    font-size: ${Theme.fonts.sizes.sm};
  }
`

export const Nav = styled.ul`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: ${Theme.spacing.md} 0 0;
    padding: 0;
    list-style: none;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;

    @media screen and (min-width: ${Theme.breakpoints.min.md}) {
      margin: ${Theme.spacing.md} 0;
      flex-wrap: unset;
    }

    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
      /* IE10+ specific styles go here */  
      display: block;
      text-align: center;
    }
  }

`

export const NavItem = styled.li`
  display: flex;
  margin: 0 0 ${Theme.spacing.default};
  text-align: center;
  text-decoration: none;
  flex-basis: 33.333%;
  justify-content: center;

  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
    /* IE10+ specific styles go here */  
    display: inline-block;
  }

`

export const NavLink = styled(Link)`
  margin: 0 ${Theme.spacing.sm};
  text-decoration: none;  
  text-transform: lowercase;
  font-family: ${Theme.fonts.headings.family};
  font-size: ${Theme.fonts.sizes.default};
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  cursor: pointer;
  color: ${Theme.colors.grays.text};
  transition: all .4s;

  @media screen and (min-width: ${Theme.breakpoints.min.md}) {
    margin: 0 ${Theme.spacing.lg};
  }
  
  &.active {
    color: ${Theme.colors.default.base};
  }

  &:hover,
  &:focus {
    color: transparent;
    z-index: 0;
    color: ${Theme.colors.default.base};
  }
`

