import React from "react"

import { Row, Col, Container } from "react-bootstrap"
import { FiGithub } from "react-icons/fi"
import { IconContext } from "react-icons"

import { birdSpot, aMazeThing } from "../images"

const Project = props => {
  const stack = props.stack

  return (
    <div id="projects">
      <Container>
        <Row id="section">
          <Col sm={8}>
            <img src={props.projectImg} alt={props.projectTitle} />
          </Col>
          <Col sm={4}>
            <h2>{props.projectTitle}</h2>

            <a href={props.github}>
              <IconContext.Provider value={{ className: "project-icon" }}>
                <FiGithub /> View on Github
              </IconContext.Provider>
            </a>
            <p id="project-about">{props.about}</p>
            <ul>
              {stack.map((item, index) => {
                return index !== stack.length - 1 ? (
                  <li key={index}>{item} | </li>
                ) : (
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default () => {
  return (
    <>
      <div>
        <Project
          projectTitle="BirdSpot"
          projectImg={birdSpot}
          github="https://github.com/anikerr/bird-spot"
          stack={["React Native", "Cloud Firestore", "Google Maps API"]}
          about="BirdSpot is a bird watching ios application. It was a Fullstack Stackathon winner for best design and built in just 4 days. Users can share photos and details of bird sightings and see what birds species have been spotted in their area."
        />
      </div>
      <div>
        <Project
          projectTitle="A Maze Thing"
          projectImg={aMazeThing}
          github="https://github.com/kirby-s-keystones/A-Maze-Thing"
          stack={["React Native", "Viro"]}
          about="In this cross-platform AR app, players navigate a maze to collect coins in a race against time. Players can also build their own maze to challenge friends and search for user-built mazes."
        />
      </div>
    </>
  )
}
