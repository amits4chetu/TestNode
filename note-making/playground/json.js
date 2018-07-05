const fs = require('fs');

var originalNote = {

    title : 'Some title',
    body : 'Some body'

}

originalNoteString = JSON.stringify(originalNote);

/**
 * Writing the note to the file
 */
fs.writeFileSync('notes.json', originalNoteString);


/**
 * Reading the note from the file
 */
var note = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof note);
console.log(note);

