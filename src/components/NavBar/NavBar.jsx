import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from './MobileMenu';
import './NavBar.scss';

class NavBar extends React.Component {
  state = {
    showMobileMenu: false,
    mobileClassName: 'mobile-menu--hide'
  };

  handleHamburgerClick = () => {
    this.setState({
      showMobileMenu: true,
      mobileClassName: 'mobile-menu--show'
    }, () => document.body.setAttribute('style', 'overflow-y: hidden'));
  }

  handleCloseClick = () => {
    this.setState({
      showMobileMenu: false,
      mobileClassName: 'mobile-menu--hide'
    }, () => document.body.removeAttribute('style'));
  }

  render() {
    return (
      <nav>
        <div className='nav-container'>
          <div className='nav-icons'>
            <a href='https://github.com/lukasz-kowalski' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className='nav-icons__icon' />
            </a>
            <a href='https://www.linkedin.com/in/lukasz-kowalski-9759a6160' target='_blank' rel="noopener noreferrer">
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
            <button className='nav-hamburger__button' onClick={this.handleHamburgerClick}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
        <MobileMenu 
          mobileClassName={this.state.mobileClassName} 
          handleClick={this.handleCloseClick} 
        />
      </nav>
    );
  }
}

export default withRouter(NavBar);
