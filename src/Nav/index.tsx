/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
 
export interface INavdProps {

}

export interface INavdState {
    children : any
}

class Nav extends PureComponent<INavdProps, INavdState> {
     state :INavdState ={
         children : this.props.children
     }

    componentDidMount() {

    }

    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              {this.state.children}
            </div>
          </nav>
        );
    }
}

export default Nav;
