import React from 'react'
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => (
  <main className='homepage'>
    <div className='overlay'>
      <div className='homepage__container'>
        <h1>Hello, I'm <span className='text-orange'>Lukasz Kowalski</span></h1>
        <h2>I'm a front-end developer</h2>
        <Link to='/projects' className='homepage__link'>View my projects <FontAwesomeIcon icon={faArrowRight} className='text-orange' /></Link>
      </div>
    </div>
  </main>
);

export default HomePage;
