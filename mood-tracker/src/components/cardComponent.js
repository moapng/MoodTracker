import React from 'react';

function CardComponent(props) {
    return (
        <div className="card">
            <h5 className="card-title">{props.name}</h5>
            <p>{props.description}</p>
        </div>

    );
}

export default CardComponent;
