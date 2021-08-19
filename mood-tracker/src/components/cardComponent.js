import React, { Component } from 'react';

class CardComponent extends Component {
    render() {
        return (

            <div class="card">
                <img class="card-img-top" src={this.props.src} alt={this.props.alt} />
                <h5 class="card-title">{this.props.name}</h5>
            </div>

        );
    }
}
export default CardComponent;
