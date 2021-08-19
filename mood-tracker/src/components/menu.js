import React, { Component } from 'react';
import CardComponent from './cardComponent';

class Menu extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <CardComponent src="../icons/cloudy.png" alt="Image of a sun and a cloud" name="weather" />
                    <CardComponent src="../icons/mood.icon.png" alt="Image of a few different moods; happy, sad, angry" name="mood" />
                </div>
                <div class="row">
                    <CardComponent src="../icons/checkbox2.png" alt="Image of checkboxes" name="habits" />
                    <CardComponent src="../icons/note.png" alt="Image of a generic note" name="things of note" />
                </div>
            </div>
        );
    }
}
export default Menu;