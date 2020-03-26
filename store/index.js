import vuex from 'vuex'

import site from './modules/site'
import draws from './modules/draws'

let createStore = () => {
  return new vuex.Store({
    modules: {
      site,
      draws
    }
  })
}

export default createStore
