import React, { Component } from 'react';
import BrowserWindowComponent from '../components/browserWindowComponent';

class HabitsPage extends Component {
    render() {
        return (
            <>
                <BrowserWindowComponent title="Habits" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante odio, tincidunt in varius at, venenatis sit amet justo. Duis at malesuada sem, eu luctus quam. In hendrerit facilisis mattis. Aenean et velit quam. Ut vehicula erat eu ante pellentesque pretium. Phasellus blandit pharetra neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ipsum est, euismod ac varius at, fringilla vel dui. Fusce vulputate vel tortor ac rhoncus. Donec sem risus, tincidunt sed pulvinar non, rhoncus quis nulla. Nulla non maximus magna. Nullam arcu orci, aliquam sit amet arcu non, rutrum vehicula nisl. Etiam faucibus ornare nisl id aliquet." />
            </>
        );
    }
}

export default HabitsPage;