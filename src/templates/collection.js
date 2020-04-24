import React from "react"
import { graphql } from "gatsby"
import { DateTime } from "luxon"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Draft from "../components/draft"
import { rhythm, scale } from "../utils/typography"

class CollectionPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const publishedDateRendered = DateTime.fromISO(
      post.frontmatter.date
    ).toLocaleString(DateTime.DATETIME_MED)

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
        <div
          style={{
            maxWidth: "95vw",
          }}
        >
          <main>
            {" "}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </main>

          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </div>
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />
      </Layout>
    )
  }
}

export default CollectionPostTemplate

export const pageQuery = graphql`
  query CollectionPostBySlug($slug: String!) {
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
  }
`
