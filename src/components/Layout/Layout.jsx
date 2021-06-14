/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import * as Styled from "./Layout.styles"
import ThemeProvider from "../Theme/ThemeProvider"
import Theme from "../Theme/Theme"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Styled.Container {...props}>
        <Styled.Main className={props.classNames}>
          <div className="wrapper-outer" css={Styled.WrapperOuter}>
            {props.children}
          </div>
        </Styled.Main>
        <Footer />
      </Styled.Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
