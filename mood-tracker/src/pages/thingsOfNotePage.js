import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import MiniNoteComponent from '../components/miniNoteComponent';

function ThingsOfNotePage() {
    const [note, setNote] = useState();
    const [nDate, setDate] = useState();
    const [uId, setuId] = useState(1);
    const [id, setId] = useState();

    var today = new Date();
    const handleChange = (event) => {
        setNote(event.target.value);
        setDate(today.toISOString());
    }

    const handleSubmit = () => {
        //setuId till den som är inloggad
        setId(crypto.randomUUID());
        fetch('https://localhost:44302/api/ofnote', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify({
                note: note,
                nDate: nDate,
                uId: uId,
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
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label htmlFor="noteTextArea">Things of Note</label>
                            <textarea onChange={handleChange} className="form-control" id="noteTextArea" rows="8" placeholder="Write down anything you'd like!"></textarea>
                            <div className="row" />
                            <button type="submit" className="btn btn-primary" id="noteSubmit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <MiniNoteComponent />
                </div>

            </BrowserView>

            <MobileView>
            </MobileView>
        </>
    );
}


export default ThingsOfNotePage;