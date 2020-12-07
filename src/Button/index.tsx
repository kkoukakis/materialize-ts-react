import React, { PureComponent } from 'react';

 

export interface IButtondProps {
    text?: string,
    id: string,
    size?: string,
    onClick?: Function,
    style ?: any
}



export interface IButtondState {
    text: string,
    id: string,
    size: string,
    onClick: Function,
    style : any
}

 
class Button extends PureComponent<IButtondProps, IButtondState> {
       
    //Component State
    state : IButtondState = {
        text : this.props.text? this.props.text : "",
        id: "",
        size : "",
        onClick: this.props.onClick? this.props.onClick : ()=>{},
        style : this.props.style? this.props.style : {},
    }
    
    // Before the component mounts 
    componentWillMount() {
        this.checkSize();
    }

    // After the component did mount
    componentDidMount() {

    }

    render() {
        return (
            <a id={this.state.id} style={ this.state.style} className={"waves-effect waves-light btn"+this.state.size} type="button" onClick={()=> this.state.onClick()}>{this.state.text}</a>
        );
    }

    //-----------------
    //Usefull Functions
    //-----------------
    checkSize(){
        if(this.props.size?.toLowerCase() == "small"){
            this.setState({size : "-small"});
         } 
         else if(this.props.size?.toLowerCase() == "large"){
            this.setState({size : "-large"});
         } else{
            this.setState({size : ""});
         }
    }
     
    
}

export default Button;
