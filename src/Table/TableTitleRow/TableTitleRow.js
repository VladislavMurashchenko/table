import React from 'react';

function TableTitleRow({ row }) {
  return (
    <tr>
      {
        Array.isArray(row) && row.map((value, i) => {
          return <td key={i}>{value}</td>;
        })
      }
    </tr>
  )
}

export default TableTitleRow;
