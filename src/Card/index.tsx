import React, { PureComponent } from 'react';


export interface ICarddProps {
    id?: string,
    card_title ?: string,
    text ?: string,
    
}

export interface ICarddState {
    id ?: string,
    card_title ?: string,
    text?: string
}

class Card extends PureComponent<ICarddProps, ICarddState> {
    
    state : ICarddState = {
        id :  this.props.id? "" : this.props.id,
        card_title : !this.props.card_title? "" : this.props.card_title,
        text : !this.props.text? "" : this.props.text

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                  
                <div className="card-content white-text">
                  <span className="card-title">{this.state.card_title}</span>
                  <p>{this.state.text}</p>
                </div>

                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;
