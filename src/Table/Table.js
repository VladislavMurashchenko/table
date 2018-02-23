import React from 'react';
import './Table.css';

import TableContentRow from './TableContentRow/TableContentRow';


function Table({data}) {
  const {title, content} = data;

  function renderTitle() {

    return (
      <thead>
        <tr>
        {
          Array.isArray(title) && title.map((item, i) => {
            return (
              <td key={i}>
                {item.value}
              </td>
            );
          })
        }
        </tr>

        {/* <tr>
          <td rowSpan="4">order</td>
          <td rowSpan="4">task name</td>
          <td colSpan="2">components</td>
          <td colSpan="7">time</td>
        </tr>
        <tr>
          <td rowSpan="3">software</td>
          <td rowSpan="3">hardware</td>
          <td rowSpan="3">count</td>
          <td colSpan="5">delevelop</td>
          <td rowSpan="3">Qa</td>
        </tr>
        <tr>
          <td colSpan="4">software develop</td>
          <td rowSpan="2">TDD</td>
        </tr>
        <tr>
          <td>count</td>
          <td>plagins</td>
          <td>tasks</td>
          <td>missings</td>
        </tr> */}
      </thead>
    );
  }

  function renderContent() {
    return (
      <tbody>
        {
          Array.isArray(content) && content.map((row, i) => {
            return <TableContentRow key={i} row={row}/>
          })
        }
      </tbody>
    );
  }

  return (
    <table className="table">
      {renderTitle()}
      {renderContent()}
    </table>
  );
}

export default Table;
