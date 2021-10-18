import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserMenu from '../components/menus/browserMenu';
import MobileMenu from '../components/menus/mobileMenu';


function HomePage() {
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


export default HomePage;