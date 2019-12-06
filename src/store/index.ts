import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// Note : Run write db `json-server db.json`

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
      console.log("fandu 123 credentials", credentials)
      return new Promise((resolve, reject) => {
        axios.post('https://mysterious-badlands-53054.herokuapp.com/auth', {
          name: credentials.username,
          message: credentials.password,
          status: "posted"
        })
        .then(response => {
          console.log(response)
          const token = response.data.message
          localStorage.setItem('access_token', token)
          contex.commit('retrieveToken', token)
          resolve(response.data.message)
        })
        .catch(error => {
          // console.log(error)
          reject(error)
        })
      })
    }
  },
  modules: {
  },
});
