export default {
  namespaced: true,

  state: {
    draws: [],
    active: {},
    country: {}
  },

  getters: {
    draw: (state, id) => state.draws[id],
    active: state => state.active
  },

  mutations: {
    SET_ACTIVE_DRAW(state, data) {
      state.active = data
    },

    SET_COUNTRY(state, data) {
      state.country = data
    }
  },

  actions: {
    nuxtServerInit: {
      root: true,
      handler: context => {
        return new Promise((resolve, reject) => {
          context
            .dispatch('setIPCountry')
            .then(data => {
              context.commit('SET_COUNTRY', data)

              context
                .dispatch('setActiveDraw')
                .then(data => {
                  context.commit('SET_ACTIVE_DRAW', data)
                  resolve()
                })
                .catch(err => {
                  console.log(err)
                  reject(err)
                })
            })
            .catch(err => {
              console.log(err)
              reject(err)
            })
        })
      }
    },

    async setActiveDraw(context) {
      let id = context.state.country ? context.state.country.id : 124
      let draw = await this.$axios.post(
        process.env.BASE_URL + '/api/draws/get-one',
        {
          active: 1,
          $and: {
            country: id
          }
        }
      )

      draw = draw.data.data
      return draw
    },

    async setIPCountry(context) {
      let country = await this.$axios.get(
        process.env.BASE_URL + '/api/country/req-ip'
      )

      return country.data.data
    }
  }
}
