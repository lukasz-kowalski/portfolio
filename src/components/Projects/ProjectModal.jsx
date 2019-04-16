import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconLink from '../../ui/IconLink';

const ProjectModal = ({ name, url, githubUrl, showModal, handleClose }) => {
  const modalClass = showModal ? 'project-modal--visible' : '';
  
  return (
    <div className={`project-modal ${modalClass}`} onClick={handleClose}>
      <div className='project-modal__container'>
        <div className='project-modal__close'>
          <FontAwesomeIcon icon={faTimesCircle} onClick={handleClose} className='project-modal__close-button' />
        </div>
        <h2>{name}</h2>
        {/* stworzyc komponenty dla buttonow, ustawic im display block */}
        {url &&
          <IconLink url={url} className='project-modal__link' icon={faWindowMaximize} />
        }
          <IconLink url={githubUrl} className='project-modal__link' icon={faGithub} />
      </div>
    </div>
  );
}
export default ProjectModal;
