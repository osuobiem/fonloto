export default {
  state: {
    faqs: {},
    categories: []
  },

  getters: {
    cats: state => state.categories
  },

  mutations: {
    SET_FAQS(state, data) {
      let cat_id = data.cat_id
      state.faqs[cat_id] = data.faqs
    },
    SET_CATS(state, data) {
      state.categories = data
    }
  },

  actions: {
    nuxtServerInit: {
      root: true,
      handler: context => {
        return new Promise((resolve, reject) => {
          context
            .dispatch('getCategories')
            .then(data => {
              context.commit('SET_CATS', data)
              data.forEach(cat => {
                let id = cat.id
                context
                  .dispatch('getFaqs', id)
                  .then(data => {
                    let f_data = {
                      cat_id: id,
                      faqs: data
                    }
                    context.commit('SET_FAQS', f_data)
                  })
                  .catch(err => {
                    console.log(err)
                    reject(err)
                  })
              })
              resolve()
            })
            .catch(err => {
              console.log(err)
              reject(err)
            })
        })
      }
    },
    async getFaqs(context, category) {
      let faqs = await this.$axios.get(
        process.env.BASE_URL + '/api/faqs/category/' + category
      )
      faqs = faqs.data.data

      return faqs
    },
    async getCategories() {
      let cats = await this.$axios.get(process.env.BASE_URL + '/api/faq-cats')
      cats = cats.data.data

      return cats
    }
  }
}
