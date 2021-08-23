import React, { Component } from 'react';
import BrowserWindowComponent from '../components/browserWindowComponent';

class ThingsOfNotePage extends Component {
    render() {
        return (
            <>
                <BrowserWindowComponent title="Things of Note" info="anything fun happen today???" />
            </>
        );
    }
}

export default ThingsOfNotePage;