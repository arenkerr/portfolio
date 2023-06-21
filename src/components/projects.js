import React from "react"
import { Row, Col, Container } from "react-bootstrap"

import { birdSpot, meTrees, tanoTasiYanTodu } from "../images"
import Icon from "./icon"

const Project = (props) => {
  const stack = props.stack

  return (
    <Container className="project">
      <Row className="section">
        <Col sm={8}>
          {props.projectImg && (
            <img src={props.projectImg} alt={props.altText} />
          )}
        </Col>
        <Col sm={4}>
          <h2>{props.projectTitle}</h2>
          <Icon
            name="github"
            url={props.github}
            iconClass="project-icon"
            linkText="View on Github"
          />
          {props.demo && (
            <span>
              &nbsp;<span aria-hidden="true">|&nbsp;</span>
              <a href={props.demo} className="icon-link-text">
                Demo
              </a>
            </span>
          )}
          <p className="project-about">{props.about}</p>
          <ul>
            {stack.map((item, index) => {
              return index !== stack.length - 1 ? (
                <li key={index}>
                  {item} <span aria-hidden="true">|</span>{" "}
                </li>
              ) : (
                <li key={index}>{item}</li>
              )
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

const projects = () => {
  return (
    <div id="projects">
      <div>
        <Project
          projectTitle="BirdSpot"
          projectImg={birdSpot}
          altText="iPhone screen showing a map of NYC with pins where birds were sighted"
          github="https://github.com/arenkerr/bird-spot"
          stack={["React Native", "Cloud Firestore", "Google Maps API"]}
          about="BirdSpot is a bird watching ios application. It was a Fullstack Academy hackathon winner for best design and built in just 4 days. Users can share photos and details of bird sightings and see what birds species have been spotted in their area."
        />
      </div>
      <div>
        <Project
          projectTitle="Tåno, Tåsi, yan Todu"
          projectImg={tanoTasiYanTodu}
          altText="MacBook Pro screen showing the homepage of the website"
          github="https://github.com/arenkerr/tano-tasi-todu"
          stack={["Gatsby", "Strapi", "GraphQL"]}
          about="Website for Tåno, Tåsi, yan Todu (TTT) an indigenous-led environmental protection organization on Guåhan."
        />
      </div>
      <div>
        <Project
          projectTitle="Middle-Earth Trees"
          projectImg={meTrees}
          altText="MacBook Pro screen showing a Hobbit geneaological tree"
          github="https://github.com/arenkerr/middle-earth-d3"
          stack={["React", "D3", "GraphQL"]}
          about="Genealogical data from Tolkien's Middle-Earth rendered into interactive visualizations using React and D3."
          demo="https://middle-earth-trees.netlify.app/"
        />
      </div>
    </div>
  )
}

export default projects
