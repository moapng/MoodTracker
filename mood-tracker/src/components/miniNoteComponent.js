import React, { useEffect, useState } from 'react';

function MiniNoteComponent() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44302/api/ofnote')
            .then(response => response.json())
            .then(
                (result) => {
                    //sorts by date
                    setNotes(result.sort((a, b) => {
                        return new Date(a.nDate) - new Date(b.nDate);
                    }))
                });

    })

    //slice to show 5 latest
    let latestNotes = notes.slice(notes.length - 5, notes.length).map((note) =>
        <div className="miniNoteCard" key={note.id}>
            <h1>{note.nDate.split('T')[0]}</h1>
            <p>{note.note}</p>
        </div>);

    return (
        <div className="container">
            <div className="row">
                {latestNotes}
            </div>
            <div className="row" />
        </div>

    );
}

export default MiniNoteComponent;