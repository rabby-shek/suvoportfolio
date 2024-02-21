import React, { useState } from "react";
import { buttons } from "./buttons";
import { projectList } from "./projectList";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const Projects = () => {
  useTitle("Projects")
  let navigate = useNavigate();
  const handleButtonValue = (e) => {
    console.log(e.target.value);
  };
  const handleProjectView = (projectID) => {
    navigate(`/projects/${projectID}`);
  };

  const allProjects = projectList.map((project) => {
    return (
      <div
        className="card"
        key={project.id}
        onClick={() => handleProjectView(project.id)}
      >
        <div className="card-title">{project.name}</div>
        <div className="card-image">
          <img src={project.image} alt="" />
        </div>
      </div>
    );
  });
  return (
    <div className="projects">
      {/* <div className="project-list-buttons">
        <ul>
          {buttons.map((button) => {
            return (
              <li key={button.id}>
                <button value={button.value} onClick={handleButtonValue}>
                  {button.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="header-title">Projects</div>
      <div className="projects-container">{allProjects}</div>
    </div>
  );
};

export default Projects;
