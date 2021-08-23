import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserWindowComponent from '../components/browserWindowComponent';
import MobileWindowComponent from '../components/mobileWindowComponent';


class MoodPage extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <BrowserWindowComponent title="Mood" info="track your mood every day" />
                </BrowserView>

                <MobileView>
                    <MobileWindowComponent title="Mood" info="" />
                </MobileView>
            </>
        );
    }
}

export default MoodPage;