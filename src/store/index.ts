import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    filter: 'all',
    todos: [],
    listReportCashBank: [],
    listAssets:[]
  },
  getters: {
    logIn(state){
      return state.token !== null
    },
    listReportCashBank(state) {
      return state.listReportCashBank;
    },
    listAssets(state) {
      return state.listAssets;
    }
  },
  mutations: {
    retrieveToken(state, payload){
      state.token = payload
    },
    destroyToken(state){
      state.token = null
    },
    updateListReportCashBank(state, payload){
      state.listReportCashBank = payload
    },
    updatelistAssets(state, payload){
      state.listAssets = payload
    }
  },
  actions: {
    destroyToken(contex){
      localStorage.removeItem('access_token')
      contex.commit('destroyToken')
    },
    retrieveToken(contex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://apiadministrasi.herokuapp.com/login', {
          username: payload.username,
          password: payload.password
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
    },
    getListReportCashBank(contex){
      axios.get('http://localhost:3000/cashBank')
      .then((response) => {
        const result = response.data[0].cashBankTransferFounds;
        console.log("fandu", response, result);
        contex.commit('updateListReportCashBank', result)
      })
    },
    getListAssets(contex){
      axios.get('http://localhost:3000/assets')
      .then((response) => {
        const result = response.data[0].listAssets;
        console.log("fandu 1",response,result)
        contex.commit('updatelistAssets', result)
      })
    }
  },
  modules: {
  },
});
