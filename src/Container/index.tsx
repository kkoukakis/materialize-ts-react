import React, { PureComponent } from 'react';
 
export interface IContainerdProps {

}

export interface IContainerdState {
    children : any
}

class Container extends PureComponent<IContainerdProps, IContainerdState> {
     state :IContainerdState ={
         children : this.props.children
     }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container">
             {this.state.children}
          </div>
        );
    }
}

export default Container;
