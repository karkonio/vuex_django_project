import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    api_url: 'http://127.0.0.1:8000/api',
    posts: [],
    profile: {},
    token: localStorage.getItem('token') || '',
    current_user_id: '',
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
    user (state, current_user_id) {
      state.current_user_id = current_user_id
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
      let current_user_id = response.data.user_id
      localStorage.setItem('token', token)
      localStorage.setItem('current_user_id', current_user_id)
      axios.defaults.headers.common['Authorization'] = 'Token ' + token
      context.commit('login_success', token)
      context.commit('user', current_user_id)
    },
    logout (context) {
      context.commit('logout')
      localStorage.removeItem('token')
      localStorage.removeItem('current_user_id')
      delete axios.defaults.headers.common['Authorization']
    },
    async getPosts (context) {
      let response = await axios.get(`${ this.state.api_url }/posts/`)
      context.commit('postsSet', response.data)
    },
    async getProfile (context, id) {
      let response = await axios.get(`${ this.state.api_url }/profiles/${id}/`)
      context.commit('profile', response.data)
      router.push({ name: 'profile', params: { id: id }})

    }
  }
})
