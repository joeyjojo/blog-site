import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

function CollectionIndex(props) {
  const { collections } = props
  return (
    <div
      style={{
        paddingLeft: "1vw",
        paddingRight: "1vw",
        borderRight: "#00000040",
        borderRightStyle: "solid",
      }}
    >
      <h2 style={{ margin: "1vw" }}>Collections</h2>
      <ul>
        {collections.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <li key={node.fields.slug}>
              <h3 style={{ margin: "1vw" }}>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function PostsIndex(props) {
  const { posts } = props
  return (
    <div
      style={{
        paddingLeft: "1vw",
        paddingRight: "1vw",
      }}
    >
      <h2 style={{ margin: "1vw" }}>Posts</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginTop: "1vw",
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.blogPosts.edges.filter(({ node }) => {
      return node.frontmatter.published
    })
    const collections = data.collections.edges.filter(({ node }) => {
      return node.frontmatter.published
    })
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div
          style={{
            display: "flex",
            marginTop: "5vh"
          }}
        >
          {collections.length > 0 && (
            <CollectionIndex collections={collections} />
          )}
          {posts.length > 0 && <PostsIndex posts={posts} />}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            published
          }
        }
      }
    }
    collections: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "collection" } } }
      sort: { fields: [frontmatter___date], order: DESC }
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
