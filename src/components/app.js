import React, { Component } from 'react';
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyBZHhPAsDsQDV1-HNadwHzdZ0OPskHZh9k';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <SearchBar/>
      </div>
    );
  }
}
