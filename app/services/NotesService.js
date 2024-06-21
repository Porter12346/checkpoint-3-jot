import { AppState } from "../AppState.js";

class NotesService {

    constructor() {
        console.log('notes service init');
    }

    setActiveNote(note) {
        AppState.activeNote = note
    }
}

export const notesService = new NotesService()