import React from 'react';
import Data from './Employees.json';
import './style.css';

export default function Filter(props) {
  // lets give options in a datalist of possible filters on the input...
  // push all of the roles into an array
  const roleArray = [];
  Data.forEach((entry) => {
    roleArray.push(entry.role);
  });

  return (
    <form className='search container mb-4 col-8'>
      <div className='form-inline '>
        <label className='mr-2' htmlFor='filter'>
          Filter Role:
        </label>
        <input
          name='filter'
          list='roles'
          type='text'
          onChange={props.handleInputChange}
          value={props.filter}
          className='form-control col-6'
          placeholder='Enter a role to filter'
        />
        <datalist id='roles'></datalist>
        <button
          type='submit'
          className='filter-btn m-2'
          onClick={props.handleFormSubmit}
        >
          Submit
        </button>
        <button className='filter-btn' onClick={props.tabledatadisplay}>
          Refresh
        </button>
      </div>
    </form>
  );
}
