import React from 'react';

function TableContentRow({ row }) {
  return (
    <tr>
      {
        Array.isArray(row) && row.map((value, i) => {
          value = value == null ? '-' : value;
          return <td key={i}>{value}</td>;
        })
      }
    </tr>
  )
}

export default TableContentRow;
