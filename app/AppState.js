import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Player } from "./models/PlayerStats.js"


class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  Player = [
    new Player1('blaze', 'wins'),
    new Player2('steve', 'wins'),
  ]
  // NOTE Used to load initial data

  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
