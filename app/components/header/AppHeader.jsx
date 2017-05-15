import React from 'react';
import Configuration from '../configuration/Configuration.jsx'

import { Button, Menu, MenuItem, Alignments } from 'react-foundation';

import './AppHeader.css';

export default class AppHeader extends React.Component {

	constructor() {
		super();
		this.state = {
			modalOpen: false
		}

		this.openConfigModal = this.openConfigModal.bind(this);
		this.closeConfigModal = this.closeConfigModal.bind(this);
		this.saveConfig = this.saveConfig.bind(this);
	}

	closeConfigModal() {
		this.setState({
			modalOpen: false
		})
	}

	openConfigModal() {
		this.setState({
			modalOpen: true
		})
	}

	saveConfig(params) {
		this.props.saveConfig(params);
		this.closeConfigModal();
	}

	render() {
		return (
			<div className="appHeader">

				<Menu alignment={Alignments.RIGHT}>
					<MenuItem>
						<Button onClick={this.openConfigModal} >CONFIGURATION</Button>
					</MenuItem>	
				</Menu>

					
					
					<Configuration modalOpen={this.state.modalOpen} 
						closeConfig={this.closeConfigModal} 
						saveConfig={this.saveConfig} 
						>
					</Configuration>
					
				

			</div>
		)
	}

}