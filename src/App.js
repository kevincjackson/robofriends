import Cardlist from './Cardlist';
import Scroll from './Scroll';
import React, { Component } from 'react';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(users => this.setState({ robots: users}));
  };

  onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value });
  }

  filteredRobots = () => {
    return this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
  }

  render() {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={this.filteredRobots()} />
        </Scroll>
      </div>
    );
  }

}

export default App;
