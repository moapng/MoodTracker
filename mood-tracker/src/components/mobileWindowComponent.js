import React, { Component } from 'react';

class MobileWindowComponent extends Component {
    render() {
        return (
            <>
                <div className="column">
                    <div className="row">
                        <div className="col-12">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.info}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MobileWindowComponent;