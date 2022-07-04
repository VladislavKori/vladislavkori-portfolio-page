import React from "react";
import "./projectButton.css";

function ProjectButton({ text, img, link }) {
  return (
    <a className="project-btn" href={link} >
      <div className="project-btn__container">
        {img ? <img src={img} className="project-btn__img" alt="" /> : false}

        {text ? <p className="project-btn__text">{text}</p> : false}
      </div>
    </a>
  );
}

export default ProjectButton;
