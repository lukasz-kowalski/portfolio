import React from 'react';
import projectsData from './projects-data';
import ProjectTile from './ProjectTile';
import './Projects.scss';

const Projects = () => (
  <React.Fragment>
  <h1>My Projects</h1>
  <main className='projects'>
    {projectsData.map((project, index) => <ProjectTile {...project} key={`project-tile${index}`} />)}
  </main>
  </React.Fragment>
);

export default Projects;
