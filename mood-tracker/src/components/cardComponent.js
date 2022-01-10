import React from 'react';

function CardComponent(props) {
    return (
        <div className='card'>
            <h5 className='card-title col'>{props.name}</h5>
            <p className='card-description col'>{props.description}</p>
        </div>

    );
}

export default CardComponent;
