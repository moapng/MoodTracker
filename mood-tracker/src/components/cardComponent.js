import React, { Component } from 'react';

class CardComponent extends Component {
    render() {
        return (

            <div className="card">
                <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
                <h5 className="card-title">{this.props.name}</h5>
            </div>

        );
    }
}
export default CardComponent;
