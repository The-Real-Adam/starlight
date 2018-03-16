import React, { Component } from 'react';

import Toolbar from './components/Toolbar'
import CanList from './components/CanList'
import logo from './logo.svg';
import './App.css';

class App extends Component {


  //state.cans is all the data, and state.filtered is for displaying the data that is currently being searched for.
  constructor(props){
  super(props)
  this.state= {cans: [], filtered: []}
  }

  //this is me queriying the API I made
  async componentDidMount() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cans`)
      const json = await response.json()
      this.setState({cans: json, filtered: json})
    }

  //this passes into the toolbar to make searches
  seeker = (searchTerm) => {
    const match = this.state.cans.filter(can => {
      return (can.size.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    this.setState({
      filtered: [...match]
    })
  }


  //renders the data thats been modified from the state through components to display on screen.
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
