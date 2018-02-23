import React from 'react';
import './Table.css';

import TableContentRow from './TableContentRow/TableContentRow';
import TableTitleRow from './TableContentRow/TableContentRow';


function Table({data}) {
  const {title, content} = data;

  function renderTitle() {
    const stateTitle = title ? getStateTitleFormTitle(title) : [];
    console.log(stateTitle);

    return (
      <thead>
        {
          stateTitle.map((row, i) => {
            return (
              <TableTitleRow key={i} row={row}/>
            );
          })
        }

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

function getStateTitleFormTitle(title) {
  const stateTitle = [];

  let maxDepth = 0;
  let currentDeptch = -1;

  title.forEach(function loop(item) {
    currentDeptch++;

    if (!stateTitle[currentDeptch]) stateTitle[currentDeptch] = [];
    stateTitle[currentDeptch].push(item.value);

    if (item.children) {
      item.children.forEach(loop);
    }

    maxDepth = Math.max(currentDeptch, maxDepth);
    currentDeptch--;
  })


  return stateTitle;
};
