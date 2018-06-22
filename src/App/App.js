import React, { Component } from 'react';
import './App.css';

import Table from '../Table/Table'

class App extends Component {
  state = {
    tableData: null
  }

  componentDidMount() {
    fetch("http://demo4452328.mockable.io/table/1")
      .then(res => res.json())
      .then(data => this.setState({ tableData: data }));
  }

  render() {
    return (
      <div className="App">
        {this.state.tableData &&
          <Table data={this.state.tableData} />
        }
      </div>
    );
  }
}

export default App;
