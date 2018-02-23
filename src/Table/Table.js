import React from 'react';
import './Table.css';


function Table({ data }) {
  
  return (
    <table className="table">
      <tr>
        <td>{data.value}</td>
      </tr>
    </table>
  )
}

export default Table;
