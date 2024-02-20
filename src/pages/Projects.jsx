import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet',
    link: 'http://test.com',
    github: 'http://github.com/',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet',
    link: 'http://test.com',
    github: 'http://github.com/',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet',
    link: 'http://test.com',
    github: 'http://github.com/',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet',
    link: 'http://test.com',
    github: 'http://github.com/',
  },
 
];

function Projects() {
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Live Version</a><br />
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
