/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import 'materialize-css/dist/css/materialize.css';
 

export interface IIcondProps {
    iconCode ?: string,
    id ?: string,
}



export interface IIcondState {
    iconCode: string,
    id: string,
}

 
class Icon extends PureComponent<IIcondProps, IIcondState> {
       
    // Component State
    state : IIcondState = {
        iconCode : this.props.iconCode? this.props.iconCode : "",
        id: "",
    }
    
    // Before the component mounts 
    componentWillMount() {
    }

    // After the component did mount
    componentDidMount() {

    }

    render() {
        return (
        <i className="material-icons">{this.state.iconCode}</i>
        );
    }
     
    
}

export default Icon;
