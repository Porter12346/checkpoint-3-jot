
import { NotesController } from "./controllers/notesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [NotesController],
    view: ''

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])