import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const CollectionIndexContainer = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;

  @media only screen and (min-width: 799px) {
    border-right: #00000040;
    border-right-width: 1px;
    border-right-style: solid;
  }
`

const CollectionIndexH2 = styled.h2`
  margin-top: 1vw;
  margin-bottom: 2vw;
`

const CollectionIndexH3 = styled.h3`
  margin-top: 1vw;
  margin-bottom: ${rhythm(1 / 4)};
`

const CollectionIndexUl = styled.ul`
  margin: 0;
`

const CollectionIndexListItem = styled.li`
  list-style: none;
`

const CollectionIndexHr = styled.hr`
  display: block;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};

  @media only screen and (min-width: 799px) {
    display: none;
  }
`

function CollectionIndex(props) {
  const { collections } = props

  return (
    <CollectionIndexContainer>
      <CollectionIndexH2>Collections</CollectionIndexH2>
      <CollectionIndexUl>
        {collections.map(({ node }) => {
          const title = node.frontmatter.title
          return (
            <CollectionIndexListItem key={node.fields.slug}>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </CollectionIndexListItem>
          )
        })}
      </CollectionIndexUl>
      <CollectionIndexHr />
    </CollectionIndexContainer>
  )
}

const PostIndexContainer = styled.div`
  padding-left: 1vw;
  padding-right: 1vw;
`

const PostIndexH2 = CollectionIndexH2

const PostIndexH3 = CollectionIndexH3

function PostsIndex(props) {
  const { posts } = props
  return (
    <PostIndexContainer>
      <PostIndexH2>Posts</PostIndexH2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <PostIndexH3>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </PostIndexH3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </PostIndexContainer>
  )
}

const BlogIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;

  @media only screen and (min-width: 799px) {
    flex-direction: row;
  }
`

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.blogPosts.edges.filter(({ node }) => {
    return node.frontmatter.published
  })
  const collections = data.collections.edges.filter(({ node }) => {
    return node.frontmatter.published
  })
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <BlogIndexContainer>
        {collections.length > 0 && (
          <CollectionIndex collections={collections} />
        )}
        {posts.length > 0 && <PostsIndex posts={posts} />}
      </BlogIndexContainer>
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
