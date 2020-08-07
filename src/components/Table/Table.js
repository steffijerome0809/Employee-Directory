import React from 'react';
import TableHeaders from './TableHeaders';
import TableData from './TableData';
import './style.css';

export default function Table(props) {
  return (
    <div className='table-div pb-5'>
      <table className='table'>
        <TableHeaders
          handleIdSort={props.handleIdSort}
          handleFirstNameSort={props.handleFirstNameSort}
          handleLastNameSort={props.handleLastNameSort}
          handleSortState={props.handleSortState}
        />
        <TableData data={props.data} />
      </table>
    </div>
  );
}
