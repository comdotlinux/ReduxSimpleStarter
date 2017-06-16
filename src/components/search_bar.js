import React, {Component} from 'react';

export default class SearchBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
		}
	}

	render() {
		return <input onChange={(e) => this.setState({ searchTerm: e.target.value }) } value={this.state.searchTerm} type="text" className="form-control" placeholder="Enter something to search."/>
	};
};