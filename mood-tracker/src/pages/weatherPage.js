import React, { Component } from 'react';
import BrowserWindowComponent from '../components/browserWindowComponent';

class WeatherPage extends Component {
    render() {
        return (
            <>
                <BrowserWindowComponent title="Weather" info="what was the weather like today??" />
            </>
        );
    }
}

export default WeatherPage;