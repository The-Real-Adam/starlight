import React, { Component } from 'react';

import Toolbar from './components/Toolbar'
import CanList from './components/CanList'

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

        <Toolbar
        seeker = {this.seeker.bind(this)}
        totalCount = {this.totalCount}
        cans = {this.state.cans}
        />


        <CanList
        cans = {this.state.filtered}
        />

      </div>
    );
  }
}

export default App;
