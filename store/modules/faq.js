export default {
  state: {
    faqs: {},
    categories: []
  },

  getters: {
    cats: state => state.categories,
    faqs: state => state.faqs
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
    async getFaqs(context, category) {
      let faqs = await this.$axios.get(
        process.env.BASE_URL + '/api/faqs/category/' + category
      )
      faqs = faqs.data.data

      return faqs
    },
    getCategories(context) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get(process.env.BASE_URL + '/api/faq-cats')
          .then(cats => {
            cats = cats.data.data
            context.commit('SET_CATS', cats)
            cats.forEach(cat => {
              let id = cat.id
              context
                .dispatch('getFaqs', id)
                .then(data => {
                  if (data) {
                    let f_data = {
                      cat_id: id,
                      faqs: data
                    }
                    context.commit('SET_FAQS', f_data)
                  }
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
  }
}
