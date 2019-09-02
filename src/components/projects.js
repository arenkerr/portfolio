import React from "react"

import { Row, Col, Container, ListGroup } from "react-bootstrap"

import { placeholder } from "../images"

const Project = props => {
  const stack = props.stack

  return (
    <div id="projects">
      <Container id="section-header">
        <h1>Projects</h1>
      </Container>
      <Container>
        <Row id="section">
          <h2>{props.projectTitle}</h2>
          <img src={props.projectImg} alt={props.projectTitle} />
          <a href={props.github}>View on github</a>
          <p>{props.about}</p>
          <ul>
            {stack.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </Row>
      </Container>
    </div>
  )
}

export default () => {
  return (
    <div>
      <Project
        projectTitle="BirdSpot"
        projectImg={placeholder}
        github="https://github.com/anikerr/bird-spot"
        stack={[
          "Node.js",
          "React Native",
          "Expo",
          "Cloud Firestore",
          "Google Maps Platform",
        ]}
        about="BirdSpot is a bird watching ios application. Users can share photos and details of bird sightings and find bird sightings in their area."
      />
    </div>
  )
}
