import React from 'react';
const AWS = require('aws-sdk');

import 'foundation-sites/dist/css/foundation-flex.min.css'

import './App.css';

import AppHeader from '../header/AppHeader.jsx';
import QueryBuilder from '../QueryBuilder/QueryBuilder.jsx';
import QueryResults from '../QueryResults/QueryResults.jsx';
import OperationButtons from '../OperationButtons/OperationButtons.jsx';
import VSeparator from '../VSeparator/VSeparator.jsx';

import QueryFactory from '../../helpers/QueryFactory.js';

export default class App extends React.Component {

	constructor() {
		super();

		this.state = {
			operation: '',
			query: '',
			result: {},
			validJson: true,
			config: this.initConfig()
		}

		this.setAWSConfig(this.state.config);

		this.onQueryChange = this.onQueryChange.bind(this);
		this.setOperation = this.setOperation.bind(this);
		this.execOperation = this.execOperation.bind(this);
		this.saveConfig = this.saveConfig.bind(this);
	}

	initConfig() {
		const config = localStorage.getItem('config') || '{}';
		return JSON.parse(config)
	}

	onQueryChange(query) {

		let q = {};

		

		try {
			q = eval("(" + query + ')');
		} catch(err) {
			this.setState({
				validJson: false
			})
			return;
		}

		this.setState({
			validJson: true,
			query: q
		});
	}

	setOperation(operation) {
		this.setState({
			operation: operation
		});
	}

	execOperation() {
		console.log('exec Operation', this.state);

		var q = new QueryFactory(this.state.operation, this.state.query);
		q.exec()
			.then(result => {
				this.setState({result: result})
			})
			.catch(error => {
				console.log(error)
				this.setState({result: error})	
			})

	}

	saveConfig(config) {
		this.setState({config: config});
		this.setAWSConfig(config);
	}

	setAWSConfig(config) {
		console.log(config);
		const credentials = new AWS.Credentials(config.access_id, config.secret_key);
		const AWSConfig = new AWS.Config({
			region: config.region,
			credentials: credentials
		});
		QueryFactory.setAWSConfig(AWSConfig);
	}

	render() {

		return (
			<div className="app">
				
					<AppHeader saveConfig={this.saveConfig}></AppHeader>
					
					<div className="content">	
						<div className="queryBuilderContainer">
							<QueryBuilder queryChanged={this.onQueryChange}></QueryBuilder>
						</div>	
						<VSeparator></VSeparator>
						<div className="queryResultsContainer">
							<QueryResults result={this.state.result}></QueryResults>
						</div>
    				</div>
    				
    				<OperationButtons setOperation={this.setOperation} execOperation={this.execOperation}></OperationButtons>
				
			</div>
		)
	}

}