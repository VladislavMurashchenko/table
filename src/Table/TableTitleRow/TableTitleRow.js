import React from 'react';

function TableTitleRow({ row }) {
  return (
    <tr>
      {
        Array.isArray(row) && row.map((item, i) => {
          const {value, ...props} = item;
          return <td key={i} {...props}>{value}</td>;
        })
      }
    </tr>
  )
}

export default TableTitleRow;
