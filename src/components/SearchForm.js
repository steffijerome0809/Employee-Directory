import React from 'react';
//import Data from './Employees.json';
import './style.css';

export default function Filter(props) {
  return (
    <form className='search container mb-4 col-8'>
      <div className='form-inline '>
        <label className='mr-2' htmlFor='filter'>
          Filter Name:
        </label>
        <input
          name='namefilter'
          type='text'
          onChange={props.handleInputChange}
          value={props.filter}
          className='form-control col-6'
          placeholder='Enter a name to filter'
        />

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
