import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserWindowComponent from '../components/browserWindowComponent';
import MobileWindowComponent from '../components/mobileWindowComponent';

class ThingsOfNotePage extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <BrowserWindowComponent title="Things of Note" info="anything fun happen today???" />
                </BrowserView>

                <MobileView>
                    <MobileWindowComponent title="Things of Note" info="" />
                </MobileView>
            </>
        );
    }
}

export default ThingsOfNotePage;