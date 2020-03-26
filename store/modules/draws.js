export default {
  namespaced: true,

  state: {
    draws: [],
    active: {}
  },

  getters: {
    draw: (state, id) => state.draws[id],
    active: state => state.active
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
      let draw = await this.$axios.post(
        process.env.BASE_URL + '/api/draws/get-one',
        { active: 1 }
      )
      draw = draw.data.data
      return draw
    }
  }
}
