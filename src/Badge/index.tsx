import React, { Component } from 'react'; 

export interface IBadgeProps {
	//Here we pass the Props Interface
	new ?: any,
	text ?: string,
	style ?: any,
}

export interface IBadgeState {
	//here we pass the State Interface
	new : string,
	text : string,
	style : any,
}

//class ComponentName Component<PropsInterface, StateInterface>
class Badge extends Component<IBadgeProps, IBadgeState> {
	
	//Component State
	state : IBadgeState = {
		new : this.props.new ? "new" : "",
		text : this.props.text ? this.props.text : "",
		style : this.props.style? this.props.style : {}
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
			<span className={"badge "+ this.state.new} style={this.state.style}>
			{this.state.text}{this.props.children?.toString()}
			</span>
		);
	}
}

export default Badge;