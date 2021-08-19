import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from './cardComponent';

class Menu extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <Link to="/weather">
                        <CardComponent src="../icons/cloudy.png" alt="Image of a sun and a cloud" name="weather" />
                    </Link>
                    <Link to="/mood">
                        <CardComponent src="../icons/mood.icon.png" alt="Image of a few different moods; happy, sad, angry" name="mood" />
                    </Link>
                </div>
                <div class="row">
                    <Link to="/habits">
                        <CardComponent src="../icons/checkbox2.png" alt="Image of checkboxes" name="habits" />
                    </Link>
                    <Link to="/things-of-note">
                        <CardComponent src="../icons/note.png" alt="Image of a generic note" name="things of note" />
                    </Link>
                </div>
            </div>
        );
    }
}
export default Menu;