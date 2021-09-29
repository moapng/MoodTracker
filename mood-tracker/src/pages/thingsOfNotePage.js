import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWindowComponent from '../components/mobileWindowComponent';

class ThingsOfNotePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: '',
            nDate: Date(),
            id: '1'

        }
    }
    handleSubmit() {
        console.log(this.state);
        fetch('https://localhost:44302/api/ofnote', {
            method: 'POST',
            body: JSON.stringify({
                note: this.state.note,
                nDate: this.state.nDate,
                id: this.state.id
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },

        }
        )
    }
    render() {
        return (
            <>
                <BrowserView>
                    <div className="row" />
                    <form>
                        <div className="form-group">
                            <label htmlFor="noteTextArea">Things of Note</label>
                            <textarea onChange={(e => this.setState({ note: e.target.value }))} className="form-control" id="noteTextArea" rows="8" placeholder="Write down anything you'd like!"></textarea>
                            <div className="row" />
                            <button type="submit" className="btn btn-primary" id="noteSubmit" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>

                </BrowserView>

                <MobileView>
                    <MobileWindowComponent title="Things of Note" info="" />
                </MobileView>
            </>
        );
    }
}

export default ThingsOfNotePage;