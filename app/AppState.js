import { Note } from './models/Note.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  notes = [new Note({
    name: 'javascript',
    body: 'a lil bit of body text here',
    color: ''
  }),
  new Note({
    name: 'javascript 2',
    body: 'a lil bit more of that sweet sweet body text here',
    color: ''
  })
  ]

  /**
  * @type Note
  */
  activeNote = null
}

export const AppState = createObservableProxy(new ObservableAppState())