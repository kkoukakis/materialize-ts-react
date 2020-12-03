import React, { PureComponent } from 'react';

export interface IRowdProps {

}

export interface IRowdState {

}

class Row extends PureComponent<IRowdProps, IRowdState> {
   
    state = {
        children : this.props.children
    }
   
   

    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                {this.state.children}
            </div>
        );
    }
}

export default Row;
