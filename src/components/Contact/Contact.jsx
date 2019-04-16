import React from 'react';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => (
  <React.Fragment>
    <h1>Contact</h1>
    <main className='contact'>
      <p>You can contact me via:</p>
      <p>
        <a href='https://www.linkedin.com/in/lukasz-kowalski-9759a6160' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} className='contact__icon' /> - LinkedIn
        </a>
      </p>
      <p>
        <a href='mailto:lukasz.grzegorz.kowalski@gmail.com'>
          <FontAwesomeIcon icon={faAt} className='contact__icon' /> - E-mail
        </a>
      </p>
      <p>Please also check my Github repository:</p>
      <p>
        <a href='https://github.com/lukasz-kowalski' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithubSquare} className='contact__icon' /> - Github
        </a>
      </p>
    </main>
  </React.Fragment>
);

export default Contact;
