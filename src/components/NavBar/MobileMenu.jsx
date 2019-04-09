import React from 'react';
import { NavLink } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenu = ({ mobileClassName, handleClick }) => (
  <div className={`mobile-menu ${mobileClassName}`}>
    <button className='mobile-menu__button' onClick={handleClick}>
      <FontAwesomeIcon icon={faTimesCircle} />
    </button>
    <ul className='mobile-menu__list'>
      <li className='mobile-menu__link'><NavLink to='/'>HomePage</NavLink></li>
      <li className='mobile-menu__link'><NavLink to='/bio'>Bio</NavLink></li>
      <li className='mobile-menu__link'><NavLink to='/projects'>Projects</NavLink></li>
      <li className='mobile-menu__link'><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </div>
);

export default MobileMenu;
