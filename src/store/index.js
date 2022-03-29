import Vue from 'Vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: null,
    currentItem: "",
  },
  getters: {
    LIST: state => {
      return state.list;
    },
    ITEM: state => {
      return state.currentItem;
    }
  },
  mutations: {
    SET_LIST: (state, payload) => {
      state.list = payload;
    },
    SET_ITEM: (state, payload) => {
      state.currentItem = payload;
    }
  },
  // actions: {
  //   SAVE_LIST: ({commit}) => {
  //     commit('SET_LIST')
  //   }
  // },
});
