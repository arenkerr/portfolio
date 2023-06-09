import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import { meBw } from "../images"
import Icon from "./icon"

const About = props => {
  const icons = [
    {
      name: "mail",
      url: "mailto:aren.kerr@gmail.com",
      label: "Email aren.kerr@gmail.com",
    },
    {
      name: "github",
      url: "https://github.com/arenkerr",
      label: "Visit my GitHub profile",
    },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/aren-kerr/",
      label: "Say hello on LinkedIn",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/aren_kerr/",
      label: "Check out my Instagram",
    },
  ]
  return (
    <>
      <div id="about">
        <Container>
          <Row className="section">
            <Col sm={4}>
              <img src={meBw} alt="Me with a city street in the background" />
            </Col>
            <Col sm={8} id="about-text">
              <h1>Hello,</h1>
              <p>
                I'm Aren Kerr (<i>air-ren</i>, they/them). I'm a software
                engineer with a desire to use tech for good. I was born on the
                island of Guam &nbsp;
                <span role="img" aria-label="palm_tree">
                  🌴
                </span>
                &nbsp; and have a background in design and illustration. After
                working as a graphic designer in NYC for 5 years, I made the
                leap into tech. Nothing gets me more excited than building,
                creating, and learning new technologies.
              </p>
              {icons.map(icon => (
                <Icon
                  name={icon.name}
                  url={icon.url}
                  label={icon.label}
                  iconClass="about-icon"
                  key={icon.name}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
      <div id="skills">
        <Container>
          <h2>Skills</h2>
          JavaScript · React · Angular · React Native · Redux · Node.js ·
          Express · Typescript · SCSS · Heroku · MongoDB · PostgreSQL · Git
        </Container>
      </div>
    </>
  )
}

export default About
