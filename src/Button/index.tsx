import React, { PureComponent } from 'react';
import scss from './index.scss';

export interface IButtondProps {

}

export interface IButtondState {

}

class Button extends PureComponent<IButtondProps, IButtondState> {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={scss.style}>
                
            </div>
        );
    }
}

export default Button;
