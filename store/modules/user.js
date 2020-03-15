export default {
  namespaced: true,

  state: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    country: '',
    photo: '',
    active: '',
    remember_token: '',
    created_at: '',
    updated_at: ''
  },

  getters: {
    fullname: state => `${state.firstname} ${state.lastname}`,
    firstname: state => state.firstname,
    lastname: state => state.lastname,
    email: state => state.email,
    phone: state => state.phone
  }
}
