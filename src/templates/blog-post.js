import React from "react"
import { Link, graphql } from "gatsby"
import { DateTime } from "luxon"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Draft from "../components/draft"
import PostPublishingInformation from "../components/postpublishinginformation"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const github = this.props.data.github
    const { previous, next } = this.props.pageContext
    const publishedDateRendered = DateTime.fromISO(
      post.frontmatter.date
    ).toLocaleString(DateTime.DATETIME_MED)
    const lastCommit = github.repository.ref.target.history.edges[0]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {!post.frontmatter.published && <Draft />}
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {publishedDateRendered}
        </p>
        <div style={{
          maxWidth: "95vw"
        }}>
          <main>
            {" "}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </main>

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          {lastCommit && (
            <PostPublishingInformation
              publishedDate={post.frontmatter.date}
              lastEditedDate={lastCommit.node.committedDate}
              lastEditSnippet={lastCommit.node.message}
              repositoryURL={github.repository.url}
              relativePath={this.props.pageContext.relativePath}
            />
          )}

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </div>
        <Bio />
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && next.frontmatter.published && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $relativePath: String!
    $repositoryName: String!
    $repositoryOwner: String!
  ) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        published
      }
    }
    github {
      repository(name: $repositoryName, owner: $repositoryOwner) {
        name
        url
        ref(qualifiedName: "refs/heads/master") {
          id
          target {
            ... on GitHub_Commit {
              id
              history(first: 1, path: $relativePath) {
                edges {
                  node {
                    id
                    committedDate
                    message
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
