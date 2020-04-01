import vuex from 'vuex'

import site from './modules/site'
import draws from './modules/draws'
import contact from './modules/contact'

let createStore = () => {
  return new vuex.Store({
    modules: {
      site,
      draws,
      contact
    }
  })
}

export default createStore
