/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "react-bootstrap"

import Navbar from "./navBar"
import Icon from "./icon"

const Layout = ({ children, pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
      <main>{children}</main>
      <div id="footer">
        <Container>
          <footer>
            © {new Date().getFullYear()}, Aren Kerr{" "}
            <span aria-hidden="true">|</span>{" "}
            <Icon
              name="github"
              url="https://github.com/arenkerr/portfolio"
              label="View this site's github repo"
              iconClass="footer-icon"
            />
          </footer>
        </Container>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
