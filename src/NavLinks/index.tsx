/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
 
export interface INavLinksdProps {
    alignment ?: string,
    visibility ?: string
}

export interface INavLinksdState {
    children : any,
    alignment : string,
    visibility : string
}

class NavLinks extends PureComponent<INavLinksdProps, INavLinksdState> {
     state :INavLinksdState ={
         children : this.props.children,
         alignment : this.props.alignment ? this.props.alignment : "" ,
         visibility : this.props.visibility ? this.props.visibility : "" ,
        }

    componentDidMount() {

    }

    render() {
        return (
            <ul className={this.state.alignment + " " + this.state.visibility}>
                {this.state.children}    
            </ul>
        );
    }
}

export default NavLinks;
