import React, { useEffect, useState } from 'react';

function MiniNoteComponent() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44302/api/ofnote')
            .then(response => response.json())
            .then(
                (result) => {
                    setNotes(result.slice(result.length - 5, result.length))
                });

    })
    //sort by date eller ba ha fem senaste?
    let latest5Notes = notes.map((note) =>
        <div className="miniNoteCard" key={note.note}>
            <h1>{note.nDate.split('T')[0]}</h1>
            <p>{note.note}</p>
        </div>);

    return (
        <div className="container">
            <div className="row">
                {latest5Notes}
            </div>
            <div className="row" />
        </div>

    );
}

export default MiniNoteComponent;