import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconLink.scss';

const IconLink = ({ url, icon, className }) => (
  <div>
  <a href={url} target='_blank' rel="noopener noreferrer" className={`icon-link ${className}`}>
    view page <FontAwesomeIcon icon={icon} />
  </a>
</div>
);

export default IconLink;
