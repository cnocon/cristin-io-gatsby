import React from "react"
import Layout from "../Layout/Layout"
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from './PostsList.styles'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"
import { graphql } from "gatsby"

const CategoryPostsList = ({ data, pageContext }) => {
  const { categorySlug } = pageContext
  const posts = data.posts.nodes;
  const identifier = pageContext.skip;
  const maxPageNumber = pageContext.maxPageNumber;
  const currentPageNumber = Math.floor(identifier / 3) + 1;
  const prevPageNumber = currentPageNumber - 1 > 0 ? currentPageNumber - 1 : false;
  const nextPageNumber = currentPageNumber + 1 <= maxPageNumber ? currentPageNumber + 1 : false;
  const categories = Object.values(data.categories.nodes.map(node => node.categories).flat().reduce((acc, node) => {
    if (!acc[node.slug]) {
      acc[node.slug] = { name: node.name, slug: node.slug };
    }
    return acc;
  }, {}));

  const articles = posts.map(post => {
    return (
      <PostPreview post={post} key={post.slug} />
    )
  });

  const prevBtn = (
    <div className="col-sm-6 nav-prev left-block">
      {prevPageNumber ? (
        <>
          <h4>NEWER POSTS</h4>
          <Styled.Button href={`/articles/${categorySlug}/page-${prevPageNumber}`}>
            <i className="fal fa-long-arrow-left"></i>{` `}BACK
          </Styled.Button>
        </>
      ) : null}
    </div>
  )

  const nextBtn = (
    <div className="col-sm-6 nav-next right-block">
      {nextPageNumber ? (
        <>
          <h4>OLDER POSTS</h4>
          <Styled.Button href={`/articles/${categorySlug}/page-${nextPageNumber}`}>
            CONTINUE{` `}<i className="fal fa-long-arrow-right"></i>
          </Styled.Button>
        </>
      ) : null}
    </div>
  )

  return (
    <Layout className="blog-posts">
      <Header />
      <SEO
        stitle={`Latest Posts in ${categorySlug.charAt(0).toUpperCase()}${categorySlug.slice(1)} | Front End Development Blog`}
        sdescription={`Latest posts in ${categorySlug.charAt(0).toUpperCase()}${categorySlug.slice(1)} from Cristin O'Connor's Front End Development Blog`}
      />
      <div className="posts-list">
        <Rule title={`Posted in ${categorySlug.charAt(0).toUpperCase()}${categorySlug.slice(1)}`} icon="fas fa-rss" />
        <Breadcrumbs crumbs={[
          {title: 'Home', path: '/'},
          {title: `Blog`,path: `/articles/page-1`},
          {title: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1), path: null},
        ]} />
        <div className="row">
          <div className="col-sm-12 col-md-9">
            {articles}
            <Styled.Navigation>
              {prevBtn}
              {nextBtn}
            </Styled.Navigation>
          </div>
          <BlogSidebar categories={categories} colClasses='col-sm-12 col-md-3' />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($categorySlug: String, $skip: Int) {
    posts: allButterPost(sort: {fields: published, order: DESC}, skip: $skip, limit: 3, filter: {categories: {elemMatch: {slug: {eq: $categorySlug}}}}) {
      nodes {
        categories {
          name
          slug
        }
        id
        published(locale: "en-US")
        slug
        summary
        title
      }
    }
    categories: allButterPost {
      nodes {
        categories {
          name
          slug
        }
      }
    }
  }
`;

export default CategoryPostsList
