import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component {



  constructor(props){
  super(props)
  this.state= {cans: [], filtered: []}
  }



  seeker = (searchTerm) => {
    const match = this.state.cans.filter(can => {
      return (can.size.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    this.setState({
      filtered: [...match]
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
