import React, { Component } from 'react';
import './App.css';

import Table from '../Table/Table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: { value: 'fdsfgsdg' }
    }
  }

  render() {
    return (
      <div className="App">
        <Table data={this.state.tableData}/>
      </div>
    );
  }
}

export default App;
