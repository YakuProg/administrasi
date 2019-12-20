import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    filter: 'all',
    todos: []
  },
  getters: {
    logIn(state){
      return state.token !== null
    }
  },
  mutations: {
    retrieveToken(state, token){
      state.token = token
    },
    destroyToken(state){
      state.token = null
    }
  },
  actions: {
    destroyToken(contex){
      localStorage.removeItem('access_token')
      contex.commit('destroyToken')
    },
    retrieveToken(contex, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('https://apiadministrasi.herokuapp.com/login', {
          username: credentials.username,
          password: credentials.password
        })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('access_token', token)
          contex.commit('retrieveToken', token)
          resolve(response.data.token)
        })
        .catch(error => {
          reject(error)
        })
      })
    }
  },
  modules: {
  },
});
