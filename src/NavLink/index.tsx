/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import 'materialize-css/dist/css/materialize.css';
 

export interface INavLinkdProps {
    id ?: string,
    title ?: string,
    link ?: string,
}



export interface INavLinkdState {
    id: string,
    title: string,
    link: string,
}

 
class NavLink extends PureComponent<INavLinkdProps, INavLinkdState> {
       
    // Component State
    state : INavLinkdState = {
        id: "",
        title : this.props.title? this.props.title : "",
        link : this.props.link? this.props.link : "#",
    }
    
    // Before the component mounts 
    componentWillMount() {
    }

    // After the component did mount
    componentDidMount() {

    }

    render() {
        return (
            <li><a href={this.state.link}>{this.state.title}</a></li>
        );
    }
     
    
}

export default NavLink;
