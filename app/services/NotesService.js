import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js";

class NotesService {

    constructor() {
        AppState.on('notes', this.saveNotes)
        console.log('notes service init');
        this.loadNotes()
    }

    saveActiveNote(activeBodyArea) {
        AppState.activeNote.body = (`${activeBodyArea}`)
        let editDate = new Date()
        AppState.activeNote.editTime = editDate
        this.saveNotes()
    }

    setActiveNote(note) {
        AppState.activeNote = note
    }

    createNote(data) {
        let notes = AppState.notes
        let note = new Note(data)
        notes.push(note)
    }

    deleteNote() {
        console.log('deleting note but service style');
        let notes = AppState.notes
        let activeNote = AppState.activeNote
        // FIXME one equal sign might be breaking things here
        let spliceIndex = notes.findIndex((note) => note.id == activeNote.id)
        notes.splice(spliceIndex, 1)
    }

    saveNotes() {
        saveState('savedNotes', AppState.notes)
    }

    loadNotes() {
        if (loadState('savedNotes', [Note]).length) {
            AppState.notes = loadState('savedNotes', [Note])
        }
    }
}

export const notesService = new NotesService()