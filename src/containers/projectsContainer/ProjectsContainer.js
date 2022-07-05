import React from "react";
import "./projectsContainer.css";

// Config
import { projects } from "../../configuration/config";

// Components
import { ProjectItem } from "../../components/imports";

function ProjectsContainer() {
  return (
    <div className="projects">
      <h1 className="projects__title">my projects</h1>
      <div className="projects__content">
        <ul className="projects__list">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              preview={project.preview}
              link={project.link}
              sourseLink={project.sourseLink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectsContainer;
