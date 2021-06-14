import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import Rule from "../components/Rule/Rule"
import PortfolioList from "../components/PortfolioList/PortfolioList"

const PortfolioPage = () => {
  return (
    <Layout>
      <Header />
      <SEO stitle="Portfolio | Cristin O'Connor"/>
      <Rule title={'Portfolio'} icon="fal fa-folders"/>
      <PortfolioList />
    </Layout>
  )
}

export default PortfolioPage
