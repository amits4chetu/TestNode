console.log(`Starting App...`);

/**
 * requiring buit-in/third party modules
 */
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

console.log(yargs.argv);

var titleOptions = {
    describe : 'title of the note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
            .command('add', 'Add a new note', {
                title : titleOptions,
                body : bodyOptions
            })
            .command('list', 'List all notes')
            .command('read', 'Read a note', {
                title: titleOptions
            })
            .command('remove', 'Remove a note', {
                title: titleOptions
            })
            .help()
            .argv;


/**
 * requring custom defined modules
 */
const note = require('./notes.js');

var command = argv._[0];

if (command === 'read') {

   var readNote = note.getNote(yargs.argv.title);

   if(readNote.length === 0) {

    console.log('Note not found...');

   }
   else {

   // debugger;
    
    logNote(readNote[0]);

   }

}
else if (command === 'list') {

    var allNotes = note.getAll();

    console.log(`Reading ${allNotes.length} note(s).`);

    allNotes.forEach( (n) => console.log(note.logNote(n)));

}
else if (command === 'remove') {

    var noteRemoved = note.removeNote(yargs.argv.title);

    var message = noteRemoved ? 'Note was removed' : 'Note was not found!';
    console.log(message);

}
else if (command === 'add') {

    note.addNote(yargs.argv.title, yargs.argv.body);

}
else {

    console.log('command not recognized');  

}