import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MiniMenu extends Component {
    render() {
        return (
            <div className="dropdown-content">
                <Link to="/weather">Weather</Link>
                <Link to="/mood">Mood</Link>
                <Link to="/habits">Habits</Link>
                <Link to="/things-of-note">ThingsOfNote</Link>
            </div>
        );
    }
}

export default MiniMenu;