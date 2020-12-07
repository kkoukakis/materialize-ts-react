/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import 'materialize-css/dist/css/materialize.css';
 

export interface INavLogodProps {
    id ?: string,
    text ?: string,
    alignment ?: string
}



export interface INavLogodState {
    id: string,
    text: string,
    alignment : string
}

 
class NavLogo extends PureComponent<INavLogodProps, INavLogodState> {
       
    // Component State
    state : INavLogodState = {
        id: "",
        text : this.props.text? this.props.text : "",
        alignment : this.props.alignment? this.props.alignment : "",
    }
    
    // Before the component mounts 
    componentWillMount() {
    }

    // After the component did mount
    componentDidMount() {

    }

    render() {
        return (
        <a href="#" className={"brand-logo " + this.state.alignment}>{this.state.text}</a>
        );
    }
     
    
}

export default NavLogo;
