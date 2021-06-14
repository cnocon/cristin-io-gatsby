// import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Theme from "../Theme/Theme"
import { css } from "@emotion/core"

export const PostPreview = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: ${Theme.spacing.xl} 15px ${Theme.spacing.xl};
  border-bottom: 2px solid ${Theme.colors.grays.border};
  justify-content: center;
  align-items: center;

  &:first-of-type {
    padding-top: 2.25rem;
  }
  
  &:last-of-type {
    border-bottom: 0;
  }

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    margin: ${Theme.spacing.md} auto;
  }

  .entry-content {
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      max-width: 100%;
    }
  }

`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 4rem;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    max-width: 100%;
  }
`

export const TitleLink = styled(Link)`
  font-size: ${Theme.fonts.sizes.md};
  line-height: ${Theme.fonts.sizes.lineHeights.default};
  padding-bottom: 0;
  font-weight: 900;
  color: ${Theme.colors.default.base};
  font-family: ${Theme.fonts.headings.family};
  transition: all .4s;

  &:hover {
    color: ${Theme.colors.default.darker};
  }
`

export const Title = styled.h2`
  margin: 0 auto 1.6rem;
`

export const EntryMeta = css`
  display: block;
  float: none;
  width: 100%;
  max-width: none;
  padding-bottom: 0;
  margin-bottom: 0;
  font-size: 0.750em;
  color: ${Theme.colors.grays.textDarker};
  font-weight: 400;
  font-size: ${Theme.fonts.sizes.xs};
  line-height: ${Theme.fonts.sizes.lineHeights.xl};;
  text-align: center;

  > span {
    display: inline-block;
    margin: 0 8px 12px auto;
    max-width: none;
    min-height: 20px;
    text-align: center;
  }

  a,
  .entry-date {
    padding: 4px 10px;
    margin: 0 2px;
    border: 1px solid ${Theme.colors.grays.borderMedium};
    border-radius: 4px;
    text-transform: uppercase;
    font-size: ${Theme.fonts.sizes.xs};
    letter-spacing: .03em;
    font-weight: 800;
    color: ${Theme.colors.grays.textDarker};
    -webkit-transition: color 0.1s, background-color .2s, border-color .2s; transition: color 0.1s, background-color .2s, border-color .2s;
  }

  a:hover {
    color: #345;
    border-color: #345;
  }

  h3 {
	  font-size: 12px;
    font-weight: 900;
    letter-spacing: .15em;
    color: #DDE4E6;
  }
  
  .posted-in {
    margin-right: 3px;
  }

  .posted-on time {
    margin-left: 5px;
  }
`

export const Button = styled(Link)`
  display: block;  
  height: 34px;
  max-width: 17rem;
  margin: auto;
  padding: 0 ${Theme.spacing.default};
  text-align: center;
  letter-spacing: .03rem;
  color: ${Theme.colors.default.base};
  line-height: 30px;
  font-size: ${Theme.fonts.sizes.xs};
  font-family: ${Theme.fonts.body.family};
  font-weight: 700;
  text-transform: uppercase;
  outline: 0;
  border: 2px solid ${Theme.colors.default.base};
  border-radius: 4px;
  background-color: #fff;
  color: ${Theme.colors.default.base};
  transition: all .2s;

  &:hover {
    
    background-color: #345;
    color: #fff;
  }

  .meta-nav {
    margin-left: 5px;
  }
`
