export default {
  state: {
    site: {
      home_header: {},
      about_us: ''
    }
  },

  getters: {
    home_header: state => state.site.home_header,
    about_us: state => state.site.about_us
  },

  mutations: {
    SET_SITE(state, data) {
      state.site = data
    }
  },

  actions: {
    nuxtServerInit: {
      root: true,
      handler: context => {
        return new Promise((resolve, reject) => {
          context
            .dispatch('setSite')
            .then(data => {
              context.commit('SET_SITE', data)
              resolve()
            })
            .catch(err => {
              console.log(err)
              reject(err)
            })
        })
      }
    },
    async setSite(context) {
      let site_data = {}

      let site = await this.$axios.get(process.env.BASE_URL + '/api/settings')
      site = site.data.data
      for (let i in site) {
        if (site[i].name == 'home_header') {
          let value = JSON.parse(site[i].value)
          site_data.home_header = value
        }
        if (site[i].name == 'about_us') {
          site_data.about_us = site[i].value
        }
      }

      return site_data
    }
  }
}
