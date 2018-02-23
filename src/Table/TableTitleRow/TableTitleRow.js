import React from 'react';

function TableTitleRow({ row }) {
  return (
    <tr>
      {
        Array.isArray(row) && row.map((item, i) => {
          return <td key={i}>{item.value}</td>;
        })
      }
    </tr>
  )
}

export default TableTitleRow;
