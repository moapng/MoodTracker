import React, { useEffect, useState } from 'react';

function MiniNoteComponent() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44302/api/ofnote')
            .then(response => response.json())
            .then(
                (result) => {
                    setNotes(result)
                });
        console.log(notes)
    })

    let latestNotes = notes.map((note) =>
        <div className="miniNoteCard">
            <h1>{note.nDate}</h1>
            <p>{note.note}</p>
        </div>);

    return (
        <div className="container">
            <div className="row">
                {latestNotes}
            </div>
        </div>

    );
}

export default MiniNoteComponent;