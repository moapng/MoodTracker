import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWindowComponent from '../components/mobileWindowComponent';

class ThingsOfNotePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteData: '',
            nDate: '',
            id: ''

        }
    }
    handleSubmit() {
        fetch('https://localhost:44302/api/ofnote', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({
                noteData: this.state.noteData,
                nDate: this.state.nDate,
                id: this.state.id
            }),
        }
        )
        // .then(response => response.json())
        // .then(data => { console.log(data); })
        // .catch(error => { console.log('Error:', error); })
    }
    render() {
        return (
            <>
                <BrowserView>
                    <div className="row" />
                    <form>
                        <div className="form-group">
                            <label htmlFor="noteTextArea">Things of Note</label>
                            <textarea onChange={(e => this.setState({ noteData: e.target.value }))} className="form-control" id="noteTextArea" rows="8" placeholder="Write down anything you'd like!"></textarea>
                            <div className="row" />
                            <button type="submit" className="btn btn-primary" id="noteSubmit" onSubmit={this.handleSubmit()}>Submit</button>
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