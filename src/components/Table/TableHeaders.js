import React from 'react';
import './style.css';

export default function TableHeaders(props) {
  return (
    <thead className='tablehead'>
      <tr>
        <th scope='col'>
          Employee ID
          <button
            className='btn btn-outline-dark btn-sm ml-2'
            onClick={props.handleIdSort}
          ></button>
        </th>
        <th scope='col'>First Name</th>
        <th scope='col'>
          Last Name
          <button
            className='btn btn-outline-dark btn-sm ml-2'
            onClick={props.handleNameSort}
          ></button>
        </th>
        <th scope='col'>Role</th>
        <th scope='col'>Email</th>
      </tr>
    </thead>
  );
}
