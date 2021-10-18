import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../cardComponent';

function MobileMenu() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to="/weather">
                            <CardComponent src="../icons/cloudy.png" alt="Image of a sun and a cloud" name="weather" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/mood">
                            <CardComponent src="../icons/mood.icon.png" alt="Image of a few different moods; happy, sad, angry" name="mood" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/habits">
                            <CardComponent src="../icons/checkbox2.png" alt="Image of checkboxes" name="habits" />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/things-of-note">
                            <CardComponent src="../icons/note.png" alt="Image of a generic note" name="things of note" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}


export default MobileMenu;