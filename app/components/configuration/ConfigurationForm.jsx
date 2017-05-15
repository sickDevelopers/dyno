import React from 'react';
import { Button } from 'react-foundation';

export default class ConfigurationForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			access_id: props.access_id,
			secret_key: props.secret_key,
			region: props.region
		}

		this.save = this.save.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.id] : e.target.value
		});
	} 

	save(e) {
		this.props.saveConfig(this.state);
	}

	render() {
		return (
			<div>
				
				<form action="#">
					<div className="input-container">
						<label className="label" htmlFor="access_id">Access Id</label>
					    <input className="txt-input" 
					    	type="text" 
					    	value={this.state.access_id} 
					    	id="access_id"
					    	onChange={this.handleChange}></input>
					    
					  </div>
					  <div className="input-container">
					  	<label className="label" htmlFor="secret_key">Secret Key</label>
					    <input className="txt-input" 
					    	type="text" 
					    	value={this.state.secret_key} 
					    	id="secret_key"
					    	onChange={this.handleChange}></input>
					  </div>
					  <div className="input-container">
					  	<label className="label" htmlFor="region">Region</label>
					    <input className="txt-input" 
					    	type="text" 
					    	value={this.state.region} 
					    	id="region"
					    	onChange={this.handleChange}></input>
					    
					  </div>

					<Button className="btn btn-inverse" onClick={this.save}>Save config</Button>
				</form>
			</div>
		)
	}
}