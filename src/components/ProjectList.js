import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const techProjects = projects.map((project) => {
    return < ProjectItem name={project.name} key={project.id} about={project.about} technologies={project.technologies}/> } 
  )

  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
       {techProjects} 
       </div>
    </div>
  )
}
  
export default ProjectList;
