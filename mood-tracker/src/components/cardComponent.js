import React, { Component } from 'react';

class CardComponent extends Component {
    render() {
        return (

            <div className="card">
                <h5 className="card-title">{this.props.name}</h5>
                <p>{this.props.description}</p>
            </div>

        );
    }
}
export default CardComponent;
