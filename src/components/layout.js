/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import { FiGithub } from "react-icons/fi"
import { IconContext } from "react-icons"

import Header from "./header"
import Navbar from "./navBar"

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
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Navbar siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />

      <main>{children}</main>

      <div id="footer">
        <Container>
          <footer>
            © {new Date().getFullYear()}, Alana Kerr |{" "}
            <a href="https://github.com/anikerr/portfolio" target="_blank">
              <IconContext.Provider value={{ className: "footer-icon" }}>
                <FiGithub />
              </IconContext.Provider>
            </a>
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
