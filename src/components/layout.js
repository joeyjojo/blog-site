import React from "react"
import { Link } from "gatsby"

import Bio from "./bio"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)} 0px`,
          }}
        >
          <header>{header}</header>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `0px ${rhythm(3 / 4)} 0px`,
          }}
        >
          <Bio />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `1vh ${rhythm(3 / 4)} 0px`,
          }}
        >
          <main>{children}</main>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>, Hosted on
            {` `}
            <a href="https://www.netlify.com">Netlify</a>, Source code on
            {` `}
            <a href="https://www.github.com/joeyjojo/blog-site">GitHub</a>.
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
