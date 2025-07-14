import React, { useState } from 'react';
import './Notesapp.css';


const Notesapp = () => {
  const [note, setnote] = useState('');
  const [notes, setnotes] = useState([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setnotes([...notes, note]);
      setnote('');
    }
  };

  const deleteNote = (indexToDelete) => {
    setnotes(notes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your note"
        value={note}
        onChange={(e) => setnote(e.target.value)} 
      />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <button onClick={() => deleteNote(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notesapp;
