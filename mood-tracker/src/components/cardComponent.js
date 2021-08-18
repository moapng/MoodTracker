import React, { Component } from 'react';

export default class CardComponent extends Component {
    render() {
        return (

            <div class="card">
                <img class="card-img-top" src={this.props.src} alt={this.props.alt} />
                <h5 class="card-title">weather</h5>
            </div>

        );
    }
};
