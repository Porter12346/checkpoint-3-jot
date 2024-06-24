import { generateId } from "../utils/GenerateId.js";

export class Note {
    constructor(data) {
        // FIXME add unique ID, and replace name argument with id argument
        this.name = data.name
        this.color = data.color
        this.body = data.body ? data.body : ''
        console.log('creating new note');
        this.createTime = data.createTime ? new Date(data.createTime) : new Date()
        this.editTime = data.editTime ? new Date(data.editTime) : new Date()
        this.id = data.id ? data.id : generateId()
    }

    get activeHTMLTemplate() {
        /*HTML*/
        return (`<div class="row py-4 px-2" id="custom-border">
            <div div class="col-5" >
            <h3>${this.name}</h3>
            <p>Created at: ${this.createTime.toLocaleString()}</p>
            <p>Updated at: ${this.editTime.toLocaleString()}</p>
        </div>
        <div class="col-6 d-flex flex-column">
            <form id='bodyForm' onsubmit='app.NotesController.saveActiveNote()'>
            <div class="mb-3 mt-5">
                <textarea class="form-control" id="activeBodyArea" name="activeBodyArea" placeholder="Start your jot..."
                rows="15">${this.body}</textarea>
            </div>
            <button class="btn btn-warning justify-self-end" type='submit'>SAVE</button>
            </form>
        </div>
        <div class="col-1"> <button onclick="app.NotesController.deleteNote()" class="btn btn-danger rounded-circle"><i
                class="mdi mdi-delete-outline"></i></button></div>
        </div > `)
    }

    get listHTMLTemplate() {
        /*HTML*/
        return (`<h3 onclick="app.NotesController.setActiveNote('${this.id}')" type="button">${this.name} <i class="mdi mdi-circle fs-6 fw-bolder" id='color-${this.id}'></i></h3>`)
    }
}