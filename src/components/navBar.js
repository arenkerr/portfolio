import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" className="shadow-sm">
        <Navbar.Brand as="span">
          {" "}
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            AK
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="#about" className="nav-links">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>
            <Link to="#projects" className="nav-links">
              <Nav.Link as="span" eventKey="projects">
                Projects
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
