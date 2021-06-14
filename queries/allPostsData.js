const allPostsDataQuery = `{
  allButterPost(sort: {fields: created}) {
    edges {
      node {
        id
        title
        slug
        url
        summary
        categories {
          name
          slug
        }
        tags {
          name
          slug
        }
        body
        featured_image
        featured_image_alt
        meta_description
        published
        seo_title
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
      previous {
        tags {
          name
          slug
        }
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
    }
    group(field: categories___slug) {
      field
      fieldValue
      nodes {
        featured_image
        featured_image_alt
        meta_description
        slug
        tags {
          name
          slug
        }
        summary
        title
        url
        seo_title
        published
        categories {
          name
          slug
        }
      }
    }
  }
}`;

exports.allPostsDataQuery = allPostsDataQuery;