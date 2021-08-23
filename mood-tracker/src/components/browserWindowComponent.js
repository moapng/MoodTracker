import React, { Component } from 'react';

class BrowserWindowComponent extends Component {
    render() {
        function handleClick(e) {
            e.preventDefault();
            alert("open mini menu");
        }
        return (
            <div className="browser-container">
                <div className="browser-top">
                    <div className="browser-dot-group" onClick={handleClick}>
                        <span className="browser-dot"></span>
                        <span className="browser-dot"></span>
                        <span className="browser-dot"></span>
                    </div>
                </div>

                <div className="browser-content">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.info}</p>
                </div>
            </div>
        );
    }
}

export default BrowserWindowComponent;