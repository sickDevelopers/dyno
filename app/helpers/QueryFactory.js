const AWS = require('aws-sdk');

export default class QueryFactory {

	constructor(operation, query) {
		this.operation = operation;
		this.queryText = query;
	}

	static getOperations() {
		return [
			{
				name: 'query',
				label: 'Query'
			},
			{
				name: 'scan',
				label: 'Scan'
			},
			{
				name: 'update',
				label: 'Update'
			},
			{
				name: 'put',
				label: 'Put'
			},
			{
				name: 'batchWrite',
				label: 'BatchWrite'
			},
			{
				name: 'batchGet',
				label: 'BatchGet'
			}
		]
	}

	static setAWSConfig(config) {
		QueryFactory.AWSConfig = config;
	}

	exec() {
		return this[this.operation].call(this);
	}

	scan() {
		const client = new AWS.DynamoDB.DocumentClient(QueryFactory.AWSConfig);
		return client.scan(this.queryText).promise();
	}

	query() {
		const client = new AWS.DynamoDB.DocumentClient(QueryFactory.AWSConfig);
		return client.query(this.queryText).promise();
	}

	update() {
		const client = new AWS.DynamoDB.DocumentClient(QueryFactory.AWSConfig);
		return client.update(this.queryText).promise();
	}

	put() {
		const client = new AWS.DynamoDB.DocumentClient(QueryFactory.AWSConfig);
		return client.put(this.queryText).promise();
	}

	batchGet() {
		const client = new AWS.DynamoDB.DocumentClient(QueryFactory.AWSConfig);
		return client.batchGet(this.queryText).promise();
	}

	batchWrite() {
		const client = new AWS.DynamoDB.DocumentClient(QueryFactory.AWSConfig);
		return client.batchWrite(this.queryText).promise();
	}

}