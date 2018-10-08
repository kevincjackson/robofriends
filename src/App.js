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
      this.setState({ searchfield: event.target.value });
  }

  filteredRobots = () => {
    return robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Cardlist robots={this.filteredRobots()} />
      </div>
    );
  }

}

export default App;
