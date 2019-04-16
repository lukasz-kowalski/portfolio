import React from 'react';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import listData from './list-data';
import techStackData from './tech-stack-data';

const Bio = () => (
  <React.Fragment>
    <h1>My bio</h1>
    <main className='bio'>
      <div className='bio__photo'>
        <img src='/img/lukasz-kowalski.jpg' alt='Lukasz Kowalski' />
      </div>
      <div className='bio__tech'>
        <div className='bio__logos' aria-label='My technology stack'>
          {techStackData.map((item, index) => <img key={'bio-img' + index} src={item.img} alt={item.name} />)}
        </div>
        <div className='bio__cv'>
          <ul>
            {listData.map((item, index) => 
              <li key={'bio-list' + index}>
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
                <span className='light-green'>{item[0]}</span> {item[1]}
              </li>)}
          </ul>
        </div>
      </div>
    </main>
  </React.Fragment>
);

export default Bio;
