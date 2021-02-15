import Vue from 'vue';
import Vuex from 'vuex';
import users from './users'
import contracts from './Contracts'



Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_NEV !== 'production',
  modules: {
    users,
    contracts

  }
})
