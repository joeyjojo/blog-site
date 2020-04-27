import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const useMediaQuery = query => {
  const mediaMatch = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = e => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })
  return matches
}

function CollectionIndex(props) {
  const { collections } = props
  const isRowBased = useMediaQuery("screen only and (min-width: 799px)")

  const paddingStyle = {
    paddingLeft: "1vw",
    paddingRight: "1vw",
  }
  const borderStyle = isRowBased
    ? {
        borderRight: "#00000040",
        borderRightStyle: "solid",
      }
    : {}

  const componentStyle = { ...{}, ...paddingStyle, ...borderStyle }
  return (
    <div style={componentStyle}>
      <h2 style={{ marginTop: "1vw", marginBottom: "2vw" }}>Collections</h2>
      <ul style={{ margin: 0 }}>
        {collections.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <li key={node.fields.slug} style={{ listStyle: "none" }}>
              <h3 style={{ marginTop: "1vw", marginBottom: rhythm(1 / 4) }}>
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
      <h2 style={{ marginTop: "1vw", marginBottom: "2vw" }}>Posts</h2>
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

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.blogPosts.edges.filter(({ node }) => {
    return node.frontmatter.published
  })
  const collections = data.collections.edges.filter(({ node }) => {
    return node.frontmatter.published
  })
  const isRowBased = useMediaQuery("screen only and (min-width: 799px)")
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <div
        style={{
          display: "flex",
          flexDirection: isRowBased ? "row" : "column",
          marginTop: "5vh",
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
