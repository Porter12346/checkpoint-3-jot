import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { loadState, saveState } from "../utils/Store.js";
import { setHTML, setText } from "../utils/Writer.js";

export class NotesController {
    constructor() {
        AppState.on('notes', this.drawNotesList)
        AppState.on('activeNote', this.drawActiveNote)
        console.log('notes control init');
        this.setActiveNote(AppState.notes[0].id)
        this.drawNotesList()
    }

    setActiveNote(id) {
        let foundNote = AppState.notes.find((note) => note.id == id)
        notesService.setActiveNote(foundNote)
    }

    drawActiveNote() {
        let htmlInject = AppState.activeNote.activeHTMLTemplate
        setHTML('activeNote', htmlInject)
        document.getElementById('custom-border').style.border = 'solid'
        document.getElementById('custom-border').style.borderColor = AppState.activeNote.color
        document.getElementById('custom-border').style.backgroundColor = AppState.activeNote.color + '25'
    }

    saveActiveNote() {
        event.preventDefault()
        const form = event.target
        const innerText = getFormData(form)
        console.log(innerText.activeBodyArea);
        notesService.saveActiveNote(innerText.activeBodyArea)
        this.drawActiveNote()
    }

    drawNotesList() {
        const notes = AppState.notes
        let htmlInject = ''
        notes.forEach((note) => {
            htmlInject += note.listHTMLTemplate
        });
        setHTML('notesList', htmlInject)
        setText('notesCount', notes.length)
        notes.forEach((note) => document.getElementById(`color-${note.id}`).style.color = note.color)
    }

    createNote() {
        event.preventDefault()
        console.log("creating note");
        let notes = AppState.notes
        const form = event.target
        const data = getFormData(form)
        notesService.createNote(data)
        console.log(data.color);
        this.setActiveNote(notes[notes.length - 1].id)
        // @ts-ignore
        form.reset()
    }

    deleteNote() {
        if (window.confirm('You are about to permanently delete this note!')) {
            console.log('deleting note');
            notesService.deleteNote()
            if (AppState.notes.length == 0) {
                let htmlInject = '<h1>No Current notes</h1>'
                setHTML('activeNote', htmlInject)
            }
            else {
                this.setActiveNote(AppState.notes[0].id)
            }
        }

    }

    get sideBarHTMLTemplate() {
        /*HTML*/
        return (`<div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample"
    aria - labelledby="offcanvasExampleLabel" >
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Jots: ${AppState.notes.length}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body mx-5">
        <div id="notesList">

        </div>
        <form class="mt-5">
        <div class="mb-3 d-flex gap-2">
            <input type="text" class="form-control bg-opacity-10 bg-light border-0" id="exampleFormControlInput1"
            placeholder="Create Note">
            <input type="color" class="form-control form-control-color m-0 p-0 border-0" id="exampleColorInput"
            value="#563d7c" title="Choose your color">
            <button class="btn btn-primary">Create</button>
        </div>
        </form>
    </div>
    </div>`)
    }
}
