import axios from 'axios'

export default {
  state: {
    home_header: {},
    about_us: ''
  },

  getters: {
    home_header: state => state.home_header,
    about_us: state => state.about_us
  },

  mutations: {
    SET_SITE(state, data) {
      state = data
    }
  },

  actions: {
    setSite(context) {
      axios.get(process.env.BASE_URL + '/api/settings').then(data => {
        console.log(data)
      })
    }
  }
}
