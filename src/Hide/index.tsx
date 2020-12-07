import React, { PureComponent } from 'react';
 

export interface IHidedProps {
    on ?: string,  
    hide_on ?: string,
    show_on ?: string,
}

export interface IHidedState {
    children : any,
    classes : string,
    hide_on ?: string,
    show_on ?: string,
}

class Hide extends PureComponent<IHidedProps, IHidedState> {
   
    state : IHidedState = {
        children : this.props.children,
        classes : "",
        hide_on : this.props.hide_on ? "hide-on-"+this.props.hide_on : "hide"
        } 

    componentDidMount() {

    }

    render() {
        return (
            <div className={this.state.hide_on}>
                {this.state.children}
            </div>
        );
    }
}

export default Hide;
