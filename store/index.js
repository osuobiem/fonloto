import vuex from 'vuex'

import site from './modules/site'

let createStore = () => {
  return new vuex.Store({
    modules: {
      site
    }
  })
}

export default createStore
