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
        //TO DO:
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
                <div className="container">
                    <div className="row">
                        <h2 className="col offset-1">Things of Note</h2>
                    </div>
                    <div className="row">
                        <form>
                            <div className="form-group col-10 offset-1">
                                <textarea onChange={handleChange} className="form-control" id="noteTextArea" placeholder="Write down anything you'd like!" aria-label="noteTextArea"></textarea>
                                <button type="submit" className="btn btn-primary col-12" id="noteSubmit" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <MiniNoteComponent />
                    </div>
                </div>
            </BrowserView>

            <MobileView>
            </MobileView>
        </>
    );
}


export default ThingsOfNotePage;