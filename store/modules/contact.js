export default {
  actions: {
    saveContact(context, data) {
      return new Promise((resolve, reject) => {
        this.$axios
          .post(process.env.BASE_URL + '/api/contacts/new', data)
          .then(res => {
            resolve({ status: true, message: 'Message Sent Successfully!' })
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
