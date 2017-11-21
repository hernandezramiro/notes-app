console.log("Starting notes.js")

const fs = require("fs");
const fileName = "notes-data.json";

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync(fileName);
        return JSON.parse(notesString);
    }
    catch(e) {
        return [];
    }
};

var saveNotes = function(notes) {
    fs.writeFileSync(fileName, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //Option 1
    /*var duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });*/

    //Option 2
    /*var duplicateNotes = notes.filter((note) =>{
        return note.title === title;
    });*/

    //Option 3
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = function () {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = function (title) {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};