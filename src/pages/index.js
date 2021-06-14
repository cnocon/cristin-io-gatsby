import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/seo"
import Header from "../components/Header/Header"
import AboutMe from "../components/AboutMe/AboutMe"
import { graphql } from 'gatsby';

const AboutMePage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <SEO stitle="Cristin O'Connor | Front End Developer" />
      <AboutMe posts={data.posts} />
    </Layout>
  )
}

// posts 
export const query = graphql`
  {
    posts: allButterPost(limit: 6, sort: {fields: published, order: DESC}) {
      nodes {
        featured_image
        featured_image_alt
        id
        published(locale: "en-US")
        slug
        summary
        title
      }
    }
  }
`;

export default AboutMePage

