import React from "react";
import Links from "./Links";
import ProjectList from "./ProjectList"


function About({ bio, links, projects}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} links={links} key ={links.id}/>
      <ProjectList projects={projects} />
    </div>
  );
}

export default About;
