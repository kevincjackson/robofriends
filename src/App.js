import React, { Component } from 'react';
import robots from './robots';
import SearchBox from './SearchBox';
import Cardlist from './Cardlist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    // Update searchfield
    this.setState({ searchfield: event.target.value })
  }

  render() {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Cardlist robots={filteredRobots} />
      </div>
    );
  }
}



export default App;
