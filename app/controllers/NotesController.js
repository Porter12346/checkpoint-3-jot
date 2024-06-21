import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";

export class NotesController {
    constructor() {
        console.log('notes control init');
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
