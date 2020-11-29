import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import { IconContext } from "react-icons"

import { meBw } from "../images"

const About = props => {
  return (
    <>
      <div id="about">
        <Container>
          <Row id="section">
            <Col sm={4}>
              <img src={meBw} alt="That's me" />
            </Col>
            <Col sm={8} id="about-text">
              <h1>Hello,</h1>
              <p>
                I'm Alana Kerr, or Åni for short. I'm a fullstack developer with
                a desire to use tech for good. I was born on the island of Guam
                &nbsp;
                <span role="img" aria-label="palm_tree">
                  🌴
                </span>
                &nbsp; and have a background in design and illustration. After
                working as a graphic designer in NYC for 5 years, I made the
                leap into tech. Nothing gets me more excited than building,
                creating, and learning new technologies.
              </p>
              <IconContext.Provider value={{ className: "about-icon" }}>
                <a href="mailto:ani.kerr@gmail.com">
                  <FiMail />
                </a>
                <a href="https://github.com/anikerr"
                   target="_blank">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/alana-kerr/"
                   target="_blank">
                  <FiLinkedin />
                </a>
                <a href="https://www.instagram.com/ani_kerr/"
                   target="_blank">
                  <FiInstagram />
                </a>
              </IconContext.Provider>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="skills">
        <Container>
          <h3>Skills</h3>
          JavaScript · React · Angular · React Native · Redux · Node.js · Express ·
          Typescript · SCSS · Heroku · MongoDB · Git
        </Container>
      </div>
    </>
  )
}

export default About
