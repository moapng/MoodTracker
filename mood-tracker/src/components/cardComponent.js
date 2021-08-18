import React, { Component } from 'react';

export default class CardComponent extends Component {
    render() {
        return (

            <div class="card">
                <img class="card-img-top" src="../icons/cloudy.png" alt="Image of a sun and a cloud" />
                <h5 class="card-title">weather</h5>
            </div>

        );
    }
};
