import React from 'react';

function MobileWindowComponent(props) {

    return (
        <>
            <div className="column">
                <div className="row">
                    <div className="col-12">
                        <h1>{props.title}</h1>
                        <p>{props.info}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default MobileWindowComponent;