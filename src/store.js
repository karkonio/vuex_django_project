import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = 'http://127.0.0.1:8000/api'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    error (state, error) {
      state.error = error
    },
    clean_error (state) {
      state.error = ''
    },
    login_success (state, token) {
      state.token = token
    },
    logout (state) {
      state.token = ''
    }
  },
  actions: {
    async login (context, credentials) {
      let response = await axios.post(`${API_URL}/auth/`, credentials)
      let token = response.data.token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = 'Token ' + token
      context.commit('login_success', token)
    },
    logout (context) {
      context.commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    }
  }
})
