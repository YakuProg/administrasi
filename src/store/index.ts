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

      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/user', {
          username: credentials.username,
          password: credentials.password
        })
        .then(response => {
          // console.log(response)
          const id = response.data.id
          localStorage.setItem('access_token', id)
          contex.commit('retrieveToken', id)
          resolve(response.data.id)
        })
        .catch(error => {
          //console.log(error)
          reject(error)
        })
      })
    }
  },
  modules: {
  },
});
