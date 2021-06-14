import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout/Layout"
import BlogSidebar from '../BlogSidebar/BlogSidebar'
import Header from "../Header/Header"
import SEO from "../SEO/seo"
import PostPreview from "../PostPreview/PostPreview"
import * as Styled from './PostsList.styles'
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"
import Rule from "../Rule/Rule"

const PostsList = ({ data, pageContext }) => {
  const posts = pageContext.posts.map(post => post.node);
  const maxPageNumber = pageContext.maxPageNumber;
  const identifier = pageContext.skip;
  const currentPageNumber = Math.floor(identifier / 3) + 1;
  const prevPageNumber = currentPageNumber - 1 > 0 ? currentPageNumber - 1 : false;
  const nextPageNumber = currentPageNumber + 1 <= maxPageNumber ? currentPageNumber + 1 : false;

  const categories = data ? Object.values(data?.categories?.nodes.map(node => node.categories).flat().reduce((acc, node) => {
    if (node) {
      if (!acc[node.slug]) {
        acc[node.slug] = { name: node.name, slug: node.slug };
      }
      return acc;
    } else {
      return null;
    }
  }, {})) : [];

  const prevBtn = (
    <div className="col-sm-6 nav-prev left-block">
      {prevPageNumber ? (
        <>
          <h4>NEWER POSTS</h4>
          <Styled.Button href={`/articles/page-${prevPageNumber}`}>
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
          <Styled.Button href={`/articles/page-${nextPageNumber}`}>
            CONTINUE{` `}<i className="fal fa-long-arrow-right"></i>
          </Styled.Button>
        </>
      ) : null}
    </div>
  )

  return (
    <Layout className="blog-posts">
      <Header />
      <SEO stitle="Latest Posts | Front End Development Blog" sdescription="Latest Posts from Cristin O'Connor's Front End Development Blog" />
      <div className="posts-list">
        <Rule title='Latest Posts' icon="fas fa-rss" />
        <Breadcrumbs crumbs={[
          { title: 'Home', path: '/'},
          { title: `Blog`, path: `/articles/page-1`},
          { title: `Page ${currentPageNumber}`, path: null},
          ]}
        />
        <div className="row">
          <div className="col-sm-12 col-md-9">
            {posts.map(node => <PostPreview post={node} key={node.slug} />)}
          </div>
          <BlogSidebar categories={categories} colClasses='col-sm-12 col-md-3' />
        </div>
        <Styled.Navigation>
          {prevBtn}
          {nextBtn}
        </Styled.Navigation>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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

export default PostsList
