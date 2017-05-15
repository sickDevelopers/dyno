import React from 'react';
import JSONTree from 'react-json-tree'

import './QueryResults.css';

export default class QueryResults extends React.Component {

	constructor() {
		super();
	}

	render() {

		const themeData = {
			extend: {
				scheme: 'monokai'
			},
			tree: {
				marginBottom: 0,
				marginTop: 0,
				marginLeft: 0
			}
		};

		return (
			<div className="queryResults">
				<div className="queryBuilder-header">
					<h3>Results</h3>
				</div>	
				{
					// <pre>	
					// 	{JSON.stringify(this.props.result, null, 2)}
					// </pre>
				}
				<JSONTree data={this.props.result} theme={themeData}/>
			</div>
		)
	}	
}