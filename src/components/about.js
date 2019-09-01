import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import { placeholder } from "../images"

const About = props => {
  const stack = props.stack

  return (
    <Container>
      <Row>
        <Col sm>
          <img src={placeholder} alt="That's me" />
        </Col>
        <Col sm>
          <h2>Hello,</h2>
          <p>
            I'm Alana, or Åni for short. I'm a fullstack developer with a desire
            to use tech for good. I was born on the island of Guam 🌴. After
            working as a graphic designer in NYC for 5 years, I made the leap
            into tech. Nothing gets me more excited than building, creating, and
            learning new technologies.
          </p>
          <p>
            <h4>Skills</h4>
            JavaScript · React · React Native · Redux · Node.js · Express ·
            PostgreSQL · HTML5 · CSS · Bootstrap · Firebase · Travis · Heroku ·
            Passport/OAuth
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
