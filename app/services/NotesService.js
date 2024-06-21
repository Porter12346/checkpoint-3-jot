import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js";

class NotesService {
    constructor() {
        console.log('notes service init');
        loadState()
    }

    setActiveNote(note) {
        AppState.activeNote = note
    }

    createNote(data) {
        let notes = AppState.notes
        let note = new Note(data)
        notes.push(note)
        this.saveNotes()
    }

    deleteNote() {
        console.log('deleting note but service style');
        let notes = AppState.notes
        let activeNote = AppState.activeNote
        let spliceIndex = notes.findIndex((note) => note.name = activeNote.name)
        notes.splice(spliceIndex, 1)
    }

    saveNotes() {
        saveState('savedNotes', AppState.notes)
    }

    loadNotes() {
        if (loadState('savedNotes', [Note]).length) {
            AppState.notes = loadState('savedNotes')
        }
    }
}

export const notesService = new NotesService()