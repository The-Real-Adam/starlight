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

  async componentDidMount() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cans`)
      console.log('response is: ', response);
      const json = await response.json()
      console.log('json is: ', json)
      this.setState({cans: json, filtered: json})
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
