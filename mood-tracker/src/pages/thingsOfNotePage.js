import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import BrowserWindowComponent from '../components/browserWindowComponent';
import MobileWindowComponent from '../components/mobileWindowComponent';

class ThingsOfNotePage extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <div className="row" />
                    <form>
                        <div className="form-group">
                            <label for="noteTextArea">Things of Note</label>
                            <textarea className="form-control" id="noteTextArea" rows="8" placeholder="Write down anything you'd like!"></textarea>
                            <div className="row" />
                            <button type="submit" className="btn btn-primary" id="noteSubmit">Submit</button>
                        </div>
                    </form>


                    {/* <BrowserWindowComponent title="Things of Note" info="anything fun happen today???">
                        
                    </BrowserWindowComponent> */}
                </BrowserView>

                <MobileView>
                    <MobileWindowComponent title="Things of Note" info="" />
                </MobileView>
            </>
        );
    }
}

export default ThingsOfNotePage;