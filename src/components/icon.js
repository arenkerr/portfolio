import React from "react"
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

const Icon = props => (
  <a href={props.url} aria-label={props.label}>
    {props.name === "github" && (
      <FiGithub focusable="false" className={props.iconClass} />
    )}
    {props.name === "mail" && (
      <FiMail focusable="false" className={props.iconClass} />
    )}
    {props.name === "linkedIn" && (
      <FiLinkedin focusable="false" className={props.iconClass} />
    )}
    {props.name === "instagram" && (
      <FiInstagram focusable="false" className={props.iconClass} />
    )}
    {props.linkText && <span className="icon-link-text">{props.linkText}</span>}
  </a>
)

export default Icon
