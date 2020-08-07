import React from 'react';
import './style.css';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Header() {
  return (
    <h1 className='pt-5 pb-5 header'>
      <FontAwesomeIcon icon={faBook} />
      Employee Directory
    </h1>
  );
}
