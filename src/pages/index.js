import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
