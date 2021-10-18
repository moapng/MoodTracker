import React from 'react';

function BrowserWindowComponent(props) {
    return (
        <div className="column">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="browser-container">
                        <div className="browser-top">
                        </div>

                        <div className="browser-content">
                            <h2>{props.title}</h2>
                            <p>{props.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BrowserWindowComponent;