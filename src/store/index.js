import Vue from 'Vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: null,
  },
  getters: {
    LIST: state => {
      return state.list;
    }
  },
  mutations: {
    SET_LIST: (state, payload) => {
      state.list = payload;
    }
  },
  actions: {
    SAVE_LIST: ({commit}) => {
      commit('SET_LIST')
    }
  },
});
