import React, { PureComponent } from 'react';
import 'materialize-css/dist/css/materialize.css';

export interface IButtondProps {
    message: string
}

export interface IButtondState {

}
 
class Button extends PureComponent<IButtondProps, IButtondState> {
       
    //Component State
    state = {

    }
    
    // Before the component mounts, we initialise our state
    componentWillMount() {
       
     }

    // After the component did mount, we set the state.
    componentDidMount() {

    }

    render() {
        return (
            <a className="waves-effect waves-light btn">{this.props.message}</a>
        );
    }
}

export default Button;
