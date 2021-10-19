import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileWindowComponent from '../components/mobileWindowComponent';

function ThingsOfNotePage() {
    const [note, setNote] = useState();
    const [nDate, setDate] = useState();
    const [id, setId] = useState(1);

    const handleChange = (event) => {
        setNote(event.target.value);
        setDate('2021-10-18');
        //setId till den som är inloggad
        console.log(nDate, id, note);
    }
    const handleSubmit = () => {
        fetch('https://localhost:44302/api/ofnote', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                note: note,
                nDate: nDate,
                id: id
            }),
            headers: {
                'Content-type': 'application/json',

            },

        }).catch((error) => { console.error(error); })
    }
    return (

        <>
            <BrowserView>
                <div className="row" />
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTextArea">Things of Note</label>
                        <textarea onChange={handleChange} className="form-control" id="noteTextArea" rows="8" placeholder="Write down anything you'd like!"></textarea>
                        <div className="row" />
                        <button type="submit" className="btn btn-primary" id="noteSubmit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>

            </BrowserView>

            <MobileView>
                <MobileWindowComponent title="Things of Note" info="" />
            </MobileView>
        </>
    );
}


export default ThingsOfNotePage;