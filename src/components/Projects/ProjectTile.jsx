import React, { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import IconLink from '../../ui/IconLink';
import ProjectModal from './ProjectModal';

const ProjectTile = ({ name, img, url, githubUrl }) => {
  const [showModal, toggleModal] = useState(false);

  const handleOpen = e => toggleModal(true)

  const handleClose = () => toggleModal(false)

  return (
    <div className='project-tile' style={{
      background: `url(${img})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }}>
      <div className='project-mobile' onClick={handleOpen} />
      <ProjectModal name={name} url={url} githubUrl={githubUrl} showModal={showModal} handleClose={handleClose} />
      <div className='project-tile__details'>
        <h2>{name}</h2>
        {url &&
          <IconLink url={url} className='project-tile__page-link' icon={faWindowMaximize} />
        }
        <IconLink url={githubUrl} className='project-tile__github-link' icon={faGithub} />
      </div>
    </div>
  );
}

export default ProjectTile;
