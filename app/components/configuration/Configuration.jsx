import React from 'react';
import Modal from 'react-modal';
import ConfigurationForm from './ConfigurationForm.jsx';
import { Button } from 'react-foundation';

export default class Configuration extends React.Component {

	constructor() {
		super();

		const config = localStorage.getItem('config') || '{}';
		this.state = JSON.parse(config)

		this.saveConfiguration = this.saveConfiguration.bind(this)
	}

	saveConfiguration(config) {
		localStorage.setItem('config', JSON.stringify(config));
		this.setState(config);
		this.props.saveConfig(config);
	}

	componentDidMount() {
		this.setState(localStorage.configuration || {});
	}

	render() {
		return (
			<Modal isOpen={this.props.modalOpen}
				style={Modal.defaultStyles}
				contentLabel="Configuration Modal">
				<div className="row">
					<Button onClick={this.props.closeConfig}>Close</Button>
				</div>
				<ConfigurationForm {...this.state} saveConfig={this.saveConfiguration}>
				</ConfigurationForm>
			</Modal>
		)
	}

}