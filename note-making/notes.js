console.log('Starting Notes.js');

const fs = require('fs');

var fetchNote = () => {

    try {

        return JSON.parse(fs.readFileSync('notes-data.json'));

    }
    catch(e) {

        return [];

    }

}

var saveNote = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

var addNote = (title, body) => {

    console.log('Adding a new note!', title, body);

    var notes = fetchNote();
    var noteObj = {

        title,
        body

    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length <= 0) {

        notes.push(noteObj);
        saveNote(notes);
        console.log('Note added successfully!');
    }
    else {

        console.log('Note already exists!');

    }

}

var getAll = () => {

    console.log('Getting all notes!');

    return fetchNote();

}

var removeNote = (title) => {

    console.log('Removing note!', title);

    notes = fetchNote();

    var newNotes = [];

    for(note in notes) {

        if (notes[note].title !== title) {

            newNotes.push(notes[note]);

        }

    }

    saveNote(newNotes);
    return notes.length !== newNotes.length;


}

var getNote = (title) => {

    console.log('Getting note!', title);

    notes = fetchNote();

    return notes.filter((note) => note.title === title);

}

var logNote = (note) => {

    console.log('---------');
    console.log(`title : ${note.title}`);
    console.log(`body : ${note.body}`);
    console.log('---------');
    return;

}

module.exports = {
    
    addNote,
    getAll,
    removeNote,
    getNote,
    logNote

}
