const fs = require('fs'); 
const chalk = require('chalk'); 

const addNote = (title, body) => {

    const notes = loadAllNotes(); 
    const currentNote = {
        title: title, 
        body: body
    }; 

    const duplicateNote = notes.find(note => note.title === title);


    if(!duplicateNote) {
        notes.push(currentNote); 
        saveNotes(notes); 
        console.log(chalk.green.inverse('Note added!'));
    } else {
        console.log(chalk.red.inverse('Note title exists!'));
    }

};

const loadAllNotes = () => {
    
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString(); 
        const notes = JSON.parse(dataJSON);
        return notes; 
    } catch(e) { 
        return []; 
    }
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', dataJSON); 
};


const removeNote = title => {

    const notes = loadAllNotes(); 
    
    let index = notes.findIndex(note => note.title === title); 

    if(index != -1) {
        notes.splice(index, 1); 
        saveNotes(notes);
        console.log(chalk.green.inverse('Note deleted!'));
    } else {
        console.log(chalk.red.inverse('Title could not be found!'));
    }
};

const listNotes = () => {
    
    const notes = loadAllNotes(); 

    let noteTitles  = [];
    notes.forEach((note) => {
        noteTitles.push(note.title);
    } ); 
    console.log(noteTitles); 
}

const readNote = (title) => {
    
    const notes = loadAllNotes(); 
    const targetNote = notes.find(note => note.title === title); 

    if(targetNote === undefined) {
        console.log(chalk.red.inverse('No such Note found!!!')); 
    } else {
        console.log(chalk.green.inverse.bold(targetNote.title)); 
        console.log(targetNote.body); 
    }
}


module.exports = {
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote: readNote
};