import React, { Component } from 'react';
import MiniMenu from './menus/miniMenu';

class BrowserWindowComponent extends Component {
    render() {
        return (
            <div className="column">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="browser-container">
                            <div className="browser-top">
                                <MiniMenu />
                            </div>

                            <div className="browser-content">
                                <h2>{this.props.title}</h2>
                                <p>{this.props.info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrowserWindowComponent;