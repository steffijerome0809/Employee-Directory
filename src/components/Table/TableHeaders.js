import React from 'react';
import './style.css';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TableHeaders(props) {
  return (
    <thead className='tablehead'>
      <tr>
        <th scope='col'>
          Employee ID
          <button
            className='btn btn-outline-dark btn-sm ml-2'
            onClick={props.handleIdSort}
          >
            <FontAwesomeIcon icon={faUserFriends} />
          </button>
        </th>
        <th scope='col'>
          First Name
          <button
            className='btn btn-outline-dark btn-sm ml-2'
            onClick={props.handleFirstNameSort}
          >
            <FontAwesomeIcon icon={faSortAlphaDown} />
          </button>
        </th>
        <th scope='col'>
          Last Name
          <button
            className='btn btn-outline-dark btn-sm ml-2'
            onClick={props.handleLastNameSort}
          >
            <FontAwesomeIcon icon={faSortAlphaDown} />
          </button>
        </th>
        <th scope='col'>Role</th>
        <th scope='col'>Email</th>
        <th scope='col'>
          state
          <button
            className='btn btn-outline-dark btn-sm ml-2'
            onClick={props.handleSortState}
          >
            <FontAwesomeIcon icon={faCity} />
          </button>
        </th>
      </tr>
    </thead>
  );
}
