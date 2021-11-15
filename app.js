const validator = require('validator');
const notes = require('./notes.js'); 
const chalk = require('chalk'); 
const yargs = require('yargs');

// console.log(process.argv);  
yargs.version('1.1.0');

// add, remove, read, list

// Creating add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note', 
    builder: {
        
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 

        body: {
            describe: 'Note body',
            demandOption: true, 
            type: 'string'
        }
    }, 

    handler(argv) {
        notes.addNote(argv.title, argv.body);
    } 
});

// Creating remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove a note', 

    builder: {
        title: {
            describe: "Note title", 
            demandOption: "true", 
            type: "string"
        }
    }, 

    handler(argv) {
        notes.removeNote(argv.title); 
    }
}); 

// Creating the list command
yargs.command({
    command: 'list', 
    describe: 'List the notes', 
    handler(argv) {
        notes.listNotes(); 
    }
}); 

// Creating the read command 
yargs.command({
    command: 'read', 
    describe: 'read a note', 
    
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    },
    
    handler(argv) {
        notes.readNote(argv.title); 
    }
}); 

yargs.parse(); 

// console.log(yargs.argv); 