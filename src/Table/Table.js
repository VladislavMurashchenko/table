import React from 'react';
import './Table.css';

import TableContentRow from './TableContentRow/TableContentRow';
import TableTitleRow from './TableTitleRow/TableTitleRow';


function Table({data}) {
  const { title, content } = data;

  function renderTitle() {
    const stateTitle = title ? getStateTitleFromTitle(title) : [];

    return (
      <thead>
        {
          stateTitle.map((row, i) => {
            return (
              <TableTitleRow key={i} row={row}/>
            );
          })
        }
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

function getStateTitleFromTitle(title) {
  const stateTitle = [];

  let currentDepth = -1;
  let maxDepth = countMaxDepth(title);
  let rowSpan = 1;
  const colSpans = new Map();

  title.forEach(function loop(item) {
    currentDepth++;

    if (!stateTitle[currentDepth]) stateTitle[currentDepth] = [];

    const colSpan = countColSpan(item);
    colSpans.set(item, colSpan);

    if (item.children) {
      item.children.forEach(loop);
      rowSpan = 1;
    } else {
      rowSpan = maxDepth - currentDepth + 1;
    }

    stateTitle[currentDepth].push({
      value: item.value,
      colSpan: colSpans.get(item),
      rowSpan
    });
    currentDepth--;
  });
  return stateTitle;
};


function countColSpan(item) {
  let colSpan = 0;

  if (!item.children) {
    colSpan++;
    return colSpan;
  }

  item.children.forEach((child) => {
    if (!child.children) {
      colSpan++;
    } else {
      colSpan += countColSpan(child);
    }
  });

  return colSpan;
}


function countMaxDepth(title) {
  let currentDepth = -1;
  let maxDepth = 0;

  title.forEach(function loop(item) {
    currentDepth++;
    if (item.children) {
      item.children.forEach(loop);
    }
    maxDepth = Math.max(currentDepth, maxDepth);
    currentDepth--;
  });

  return maxDepth;
}
