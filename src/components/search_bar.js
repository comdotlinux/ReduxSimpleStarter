import React, {Component} from 'react';

export default class SearchBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
		}
	}

	render() {
		return (
			<div className="input-group">
				<span className="input-group-addon" id="basic-addon1">Enter Search term</span>	
				<input
					onChange={(e) => this.setState({ searchTerm: e.target.value })}
					onClick={() => this.setState({searchTerm: ''})}
					value={this.state.searchTerm}
					type="text"
					className="form-control"
					placeholder="Enter something to search."
					aria-describedby="basic-addon1"
				/>
			</div>
		);
	};
};