export class Note {
    constructor(data) {
        this.name = data.name
        this.color = data.color
        this.body = ''
        this.createTime = new Date
        this.editTime = this.createTime
    }

    get activeHTMLTemplate() {
        /*HTML*/
        return (`<div class="row py-4 px-2" id="custom-border">
            <div div class="col-5" >
            <h3>${this.name}</h3>
            <p>Created at: ${this.createTime.toLocaleString()}</p>
            <p>Updated at: ${this.editTime.toLocaleString()}</p>
        </div>
        <div class="col-6">
            <form>
            <div class="mb-3 mt-5">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Start your jot..."
                rows="15">${this.body}</textarea>
            </div>
            </form>
        </div>
        <div class="col-1"> <button onclick="app.NotesController.deleteNote()" class="btn btn-danger rounded-circle"><i
                class="mdi mdi-delete-outline"></i></button></div>
        </div > `)
    }

    get listHTMLTemplate() {
        /*HTML*/
        return (`<h3 onclick="app.NotesController.setActiveNote('${this.name}')" type="button">${this.name} <i class="mdi mdi-circle fs-6 fw-bolder" id='color-${this.name}'></i></h3>`)
    }
}