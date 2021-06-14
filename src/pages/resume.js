import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import Resume from "../components/Resume/Resume"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs"
import Rule from "../components/Rule/Rule"

const ResumePage = () => {
  return (
    <Layout css={{position: 'relative'}}>
      <Header />
      <Breadcrumbs crumbs={[]} />
      <SEO stitle="Résumé | Cristin O'Connor"/>
      <Rule title={'Résumé'} icon="far fa-file-user"/>
      <Resume />
    </Layout>
  )
}

export default ResumePage
