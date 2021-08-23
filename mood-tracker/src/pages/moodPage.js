import React, { Component } from 'react';
import BrowserWindowComponent from '../components/browserWindowComponent';

class MoodPage extends Component {
    render() {
        return (
            <>
                 <BrowserWindowComponent title="Mood" info="track your mood every day" />
            </>
        );
    }
}

export default MoodPage;