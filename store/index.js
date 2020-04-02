import vuex from 'vuex'

import site from './modules/site'
import draws from './modules/draws'
import contact from './modules/contact'
import faq from './modules/faq'

let createStore = () => {
  return new vuex.Store({
    modules: {
      site,
      draws,
      contact,
      faq
    }
  })
}

export default createStore
