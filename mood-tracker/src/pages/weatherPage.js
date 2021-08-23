import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserWindowComponent from '../components/browserWindowComponent';
import MobileWindowComponent from '../components/mobileWindowComponent';

class WeatherPage extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <BrowserWindowComponent title="Weather" info="what was the weather like today??" />
                </BrowserView>

                <MobileView>
                    <MobileWindowComponent title="Mood" info="" />
                </MobileView>
            </>
        );
    }
}

export default WeatherPage;