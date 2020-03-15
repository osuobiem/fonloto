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
    nuxtInitConfig: {
      root: true,
      handler: () => {
        console.log('Yay')
      }
    },
    setSite(context) {
      let site_data = {}

      this.$axios.get(process.env.BASE_URL + '/api/settings').then(data => {
        let site = data.data.data
        for (let i in site) {
          if (site[i].name == 'home_header') {
            let value = JSON.parse(site[i].value)
            site_data.home_header = value
          }
          if (site[i].name == 'about_us') {
            site_data.about_us = site[i].value
          }
        }

        context.commit('SET_SITE', site_data)
      })
    }
  }
}
