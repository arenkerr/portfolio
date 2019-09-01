import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/all-projects"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
