import React from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/lib/codemirror.css';

import './QueryBuilder.css';


export default class QueryBuilder extends React.Component {

	constructor() {
		super();

		this.state = {
			query: '{}'
		}

		this.onQueryChange = this.onQueryChange.bind(this);
		this.options = {
			mode: 'javascript',
			// lineNumbers: true
		};

	}

	onQueryChange(e) {
		this.setState({query: e})
		this.props.queryChanged(e);
	}

	render() {
		return (
			<div className="queryBuilder">
				<div className="queryBuilder-header">
					<h3>Query</h3>
				</div>	
				<CodeMirror value={this.state.query} onChange={this.onQueryChange} options={this.options}></CodeMirror>
			</div>	
		)
	}

}