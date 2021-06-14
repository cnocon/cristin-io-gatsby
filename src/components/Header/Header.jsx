import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as Sty from "./Header.styles"
import portrait from "../../images/square-portrait.png"
import { window } from 'browser-monads';


const Header = ({ ruleTitle, ruleIcon, showLogo=true }) => {
  const [articlesClass, setArticlesClass] = useState("")
  const [resumeClass, setResumeClass] = useState("")
  const [portfolioClass, setPortfolioClass] = useState("")

  const setActiveOnLoad = () => {
    setResumeClass(window.location.href.match(/\/resume/) ? "active" : "")
    setArticlesClass(window.location.href.match(/\/articles/) ? "active" : "")
    setPortfolioClass(window.location.href.match(/\/portfolio/) ? "active" : "")
  }

  useEffect(() => {
    if (window) {
      setActiveOnLoad()
    }
  }, [])

  return (
    <Sty.Header>
      <Sty.Container>
        <div>
          <div className="logo-header">
            <Sty.ImageEl src={portrait} alt="Cristin O'Connor Avatar" className={`top-bar ${showLogo ? '' : 'hidden'}`}/>
            <Sty.Heading1>
              <Sty.H1Link to="/">Cristin O'Connor</Sty.H1Link>
              <Sty.Subhead>Front End Software Engineer</Sty.Subhead>
            </Sty.Heading1>
          </div>

        <Sty.Nav>
          <Sty.NavItem>
            <Sty.NavLink to="/" activeClassName="active">About</Sty.NavLink>
          </Sty.NavItem>
          <Sty.NavItem>
            <Sty.NavLink to="/articles/page-1" className={`${articlesClass}`}>Blog</Sty.NavLink>
          </Sty.NavItem>

          <Sty.NavItem>
            <Sty.NavLink to="/portfolio" className={`${portfolioClass}`}>Portfolio</Sty.NavLink>
          </Sty.NavItem>
          <Sty.NavItem>
            <Sty.NavLink to="/resume" className={`${resumeClass}`}>Résumé</Sty.NavLink>
          </Sty.NavItem>

        </Sty.Nav>
      </div>
    </Sty.Container>
  </Sty.Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Cristin O'Connor`,
}

export default Header

