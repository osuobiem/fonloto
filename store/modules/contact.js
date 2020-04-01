export default {
  actions: {
    saveContact(context, data) {
      return new Promise((resolve, reject) => {
        this.$axios
          .post(process.env.BASE_URL + '/api/contacts/new', data.data)
          .then(res => {
            res.data.status
              ? resolve({ status: true, message: 'Message Sent Successfully!' })
              : reject({ status: false, message: res.data.message })
          })
          .catch(err => {
            console.log(err)
            reject({
              status: false,
              message: 'Opps! Something went wrong. Try Again!'
            })
          })
      })
    }
  }
}
