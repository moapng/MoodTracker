import React, { Component } from 'react';
import Menu from '../components/menu';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>MoodTracker!</h1>
                <Menu />
            </div>
        );
    }
}

export default HomePage;