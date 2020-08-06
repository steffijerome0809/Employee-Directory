import React from 'react';
import './style.css'

export default function TableData(props) {
  return (
    //   map through all results and create a row in the table for each employee in the results
    <tbody className="tabledata">
      {props.data.map((employee) => (
        <tr key={employee.id} >
          <td>{employee.id}</td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.role}</td>
          <td>{employee.email}</td>
        </tr>
      ))}
    </tbody>
  );
}
