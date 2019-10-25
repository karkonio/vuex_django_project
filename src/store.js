import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    api_url: 'http://127.0.0.1:8000/api',
    posts: [],
    profiles: [],
    profile: {},
    token: localStorage.getItem('token') || '',
    error: ''
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
    },
    postsSet (state, posts) {
      state.posts = posts
    },
    profile (state, profiles) {
      state.profile = profiles
    }
  },
  actions: {
    async login (context, credentials) {
      let response = await axios.post(`${ this.state.api_url }/auth/`, credentials)
      let token = response.data.token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = 'Token ' + token
      context.commit('login_success', token)
    },
    logout (context) {
      context.commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    },
    async getPosts (context) {
      let response = await axios.get(`${ this.state.api_url }/posts/`)
      context.commit('postsSet', response.data)
    },
    async getProfile (context, id) {
      let response = await axios.get(`${ this.state.api_url }/profiles/${id}/`)
      context.commit('profile', response.data)
    }
  }
})
