/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { allPostsDataQuery } = require('./queries/allPostsData');
const { chunkArray } = require('./helpers/chunkArray');

exports.createPages = async ({ actions, graphql }) => {
  const allPostsData = await graphql(allPostsDataQuery);
  const allPosts = allPostsData.data.allButterPost.edges.reverse();
  const chunkedPosts = chunkArray(allPosts, 3);
  const categoryGroups = allPostsData.data.allButterPost.group;

  /**
   * CATEGORY PAGES
   *
   * 3 posts per page (unlimited pages per category)
   */
  categoryGroups.forEach(cat => {
    const categorySlug = cat.fieldValue;
    const categoryPosts = cat.nodes.sort((a, b) => a.published < b.published)
    const chunkedCategoryPosts = chunkArray(categoryPosts, 3);

    chunkedCategoryPosts.forEach((group, index) => {
      actions.createPage({
        path: `/articles/${categorySlug}/page-${index + 1}`,
        component: path.resolve(`./src/components/PostsList/CategoriesPostsList.jsx`),
        context: {
          skip: index * 3,
          maxPageNumber: chunkedCategoryPosts.length,
          categorySlug: categorySlug,
        },
      })
    })
  })

  /**
   * LATEST POST PAGES
   *
   * 3 posts per page
   */
  chunkedPosts.forEach((collection, index) => {
    actions.createPage({
      path: `/articles/page-${index + 1}`,
      component: path.resolve(`./src/components/PostsList/PostsList.jsx`),
      context: {
        skip: index * 3,
        maxPageNumber: chunkedPosts.length,
        posts: collection
      },
    })
  })

  /**
   * POST SINGLE PAGES
   *
   */
  allPosts.forEach(( node, index ) => {
    actions.createPage({
      path: `/articles/${node.node.slug}`,
      component: path.resolve(`./src/components/Post/Post.jsx`),
      context: {
        post: node.node,
        prevPost: index === 0 ? null : allPosts[index - 1].node,
        nextPost: index === allPosts.length - 1 ? null : allPosts[index + 1].node,
        breadcrumbs: [
          { title: 'Home', path: '/'},
          { title: `Blog`, path: `/articles/page-1`},
          { title: node.node.title, path: null},
        ],
      },
    })
  })
}

