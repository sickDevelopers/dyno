import React from 'react';
import QueryFactory from '../../helpers/QueryFactory';

import { Button } from 'react-foundation';

import './OperationButtons.css';

export default class OperationButtons extends React.Component {

	constructor() {
		super();

		this.state = {
			canExec: false
		}

		this.operations = QueryFactory.getOperations();

		console.log(this.operations);

		this.setOperation = this.setOperation.bind(this);
	}

	setOperation(e) {
		this.setState({
			canExec: (e.target.value !== '')
		})
		this.props.setOperation(e.target.value);
	}

	render() {
		return (
			<div className="operationButtons">
				<div className="selectBox">
					<select onChange={this.setOperation}>
						<option value="">Select an operation</option>

						{this.operations.map(op => {
							return <option key={op.name} value={op.name}>{op.label}</option>
						})}

					</select>
					
				</div>
				<Button className="btn" disabled={!this.state.canExec} onClick={this.props.execOperation}>EXEC OPERATION</Button>
			</div>	
		)
	}
}