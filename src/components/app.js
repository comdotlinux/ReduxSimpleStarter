import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyBZHhPAsDsQDV1-HNadwHzdZ0OPskHZh9k';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentWillMount() {
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => { 
      this.setState({videos});
    });
  }  

  render() {
    return (
      <div className="application">
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
