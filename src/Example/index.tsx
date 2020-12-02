import React, { PureComponent } from 'react'; 

export interface IExampleProps {
    //Here we pass the Props Interface
    example_prop: string
}

export interface IExampleState {
    //here we pass the State Interface
    example_state: number;
}

//class ComponentName Component<PropsInterface, StateInterface>
class Example extends PureComponent<IExampleProps, IExampleState> {
    
    //Component State
    state = {
        example_state : 0
    }

    //Add style here
    style = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    // Before the component mounts, we initialise our state
    componentWillMount() {
       
     }

    // After the component did mount, we set the state.
    componentDidMount() {

    }

    render() {
        return (
            <div style={this.style}>
                <h1>{this.props.example_prop}</h1>
            </div>
        );
    }
}

export default Example;
