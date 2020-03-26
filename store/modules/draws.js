export default {
  namespaced: true,

  state: {
    draws: [],
    active: {}
  },

  getters: {
    name: (state, id) => state.draws[id].name,
    description: (state, id) => state.draws[id].desciption,
    amount: (state, id) => state.draws[id].amount,
    will_begin: (state, id) => state.draws[id].will_begin,
    price_per_ticket: (state, id) => state.draws[id].proce_per_ticket,
    country: (state, id) => state.draws[id].country,

    aName: state => state.active.name,
    aDescription: state => state.active.desciption,
    aAmount: state => state.active.amount,
    aWill_begin: state => state.active.will_begin,
    aPrice_per_ticket: state => state.active.proce_per_ticket,
    aCountry: state => state.active.country
  },

  mutations: {
    SET_ACTIVE_DRAW(state, data) {
      state.active = data
    }
  },

  actions: {
    nuxtServerInit: {
      root: true,
      handler: context => {
        return new Promise((resolve, reject) => {
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
      }
    },

    async setActiveDraw() {
      let draw_data = {}

      let draw = await this.$axios.post(
        process.env.BASE_URL + '/api/draws/get-one',
        { active: 1 }
      )
      draw = draw.data.data
      return draw
    }
  }
}
