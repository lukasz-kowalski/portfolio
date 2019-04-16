import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from './MobileMenu';

const NavBar = () => {
  const [mobileClassName, toggleMobileClassName] = useState('mobile-menu--hide')

  const handleHamburgerClick = () => {
    toggleMobileClassName('mobile-menu--show')
    document.body.setAttribute('style', 'overflow-y: hidden');
  }

  const handleCloseClick = () => {
    toggleMobileClassName('mobile-menu--hide')
    document.body.removeAttribute('style');
  }

  return (
    <nav>
      <div className='nav-container'>
        <div className='nav-icons'>
          <a href='https://github.com/lukasz-kowalski' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} className='nav-icons__icon' />
          </a>
          <a href='https://www.linkedin.com/in/lukasz-kowalski-9759a6160' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedinIn} className='nav-icons__icon' />
          </a>
        </div>
        <div className='nav-links'>
          <NavLink to='/' exact>HomePage</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/bio'>Bio</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='nav-hamburger'>
          <button className='nav-hamburger__button' onClick={handleHamburgerClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      <MobileMenu 
        mobileClassName={mobileClassName} 
        handleClick={handleCloseClick} 
      />
    </nav>
  );
}

export default withRouter(NavBar);
