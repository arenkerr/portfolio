import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import ProjectHeader from "../components/project-header"
import Projects from "../components/projects"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <ProjectHeader />
    <Projects />
  </Layout>
)

export default IndexPage
