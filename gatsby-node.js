const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const collectionPost = path.resolve("./src/templates/collection.js")

  return graphql(
    `
      {
        blogs: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/content/blog/**/*.md" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                published
              }
            }
          }
        }
        collections: allMarkdownRemark(
          filter: { fileAbsolutePath: { glob: "**/content/collections/*.md" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                published
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.blogs.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          relativePath: `content/blog${post.node.fields.slug}`,
          repositoryName: process.env.REPOSITORY_NAME,
          repositoryOwner: process.env.REPOSITORY_OWNER,
          previous,
          next,
        },
      })
    })

    const collections = result.data.collections.edges

    collections.forEach((collection, index) => {
      createPage({
        path: collection.node.fields.slug,
        component: collectionPost,
        context: {
          slug: collection.node.fields.slug,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
