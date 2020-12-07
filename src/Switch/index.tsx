import React, { Component } from 'react'; 
import './index.css';

export interface ISwitchProps {
	//Here we pass the Props Interface
	id ?: string, //A DOM id for the toggle
	enabled ?: boolean, 
	checked ?: boolean,
	onChange ?: Function,
	value ?: string | number | string[], 
	leftLabel ?: string,
	rightLabel ?: string,
}

export interface ISwitchState {
	//here we pass the State Interface
	id : string,
	enabled : boolean,
	checked : boolean,
	disabled : boolean,
	onChange ?: Function, 
	leftLabel ?: string,
	rightLabel ?: string,
}

//class ComponentName Component<PropsInterface, StateInterface>
class Switch extends Component<ISwitchProps, ISwitchState> {
	
	//Component State
	state : ISwitchState= {
		id : this.props.id ? this.props.id : "",
		enabled : this.props.enabled ? this.props.enabled : true,
		checked : this.props.checked ? this.props.checked : false,
		disabled: this.props.enabled == false  ? true : false,
		onChange : this.props.onChange ? () => this.props.onChange : ()=>{}, 
		leftLabel  : this.props.leftLabel ? this.props.leftLabel : "",
		rightLabel : this.props.rightLabel ? this.props.rightLabel : "",
	}

	//Add style here
	style = {
	};

	// Before the component mounts, we initialise our state
	componentWillMount() {

	}

	// After the component did mount, we set the state.
	componentDidMount() {
	}

	render() {		 
		return (
			// <!-- Switch -->
			<div className="switch">
		  		<label>
					{this.state.leftLabel}
					<input id={this.state.id} checked={this.state.checked} disabled={this.state.disabled} type="checkbox" onChange={()=>{this.setState({enabled : !this.state.enabled , checked : !this.state.checked}); if(this.state.onChange)this.state.onChange(this.state.enabled)}}/>
					<span className="lever"></span>
					{this.state.rightLabel}
		 		</label>
			</div>
		);
	}		  
}

export default Switch;