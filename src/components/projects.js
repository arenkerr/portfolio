import React from "react"

import { placeholder } from "../images"

const Project = props => {
  const stack = props.stack

  return (
    <div>
      <h2>{props.projectTitle}</h2>
      <img src={props.projectImg} alt={props.projectTitle} />
      <a href={props.github}>View on github</a>
      <p>{props.about}</p>
      <ul>
        {stack.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
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
