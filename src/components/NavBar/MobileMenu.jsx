import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileMenu = ({ mobileClassName, handleClick, location }) => {
  useEffect(() => handleClick(), [location.pathname])
  return (
    <div className={`mobile-menu ${mobileClassName}`}>
      <button className='mobile-menu__button' onClick={handleClick}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
      <ul className='mobile-menu__list'>
        <li className='mobile-menu__link'><NavLink to='/' exact>HomePage</NavLink></li>
        <li className='mobile-menu__link'><NavLink to='/projects'>Projects</NavLink></li>
        <li className='mobile-menu__link'><NavLink to='/bio'>Bio</NavLink></li>
        <li className='mobile-menu__link'><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default withRouter(MobileMenu);
