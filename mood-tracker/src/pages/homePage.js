import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserMenu from '../components/menus/browserMenu';
import MobileMenu from '../components/menus/mobileMenu';


class HomePage extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <BrowserMenu />
                </BrowserView>

                <MobileView>
                    <MobileMenu />
                </MobileView>
            </>
        );
    }
}

export default HomePage;