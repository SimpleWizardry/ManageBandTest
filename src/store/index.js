import Vue from 'Vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: null,
    currentItem: "",
    options: null,
  },
  getters: {
    LIST: state => {
      return state.list;
    },
    ITEM: state => {
      return state.currentItem;
    },
    OPTIONS: state => {
      return state.options;
    }
  },
  mutations: {
    SET_LIST: (state, payload) => {
      state.list = payload;
    },
    SET_ITEM: (state, payload) => {
      state.currentItem = payload;
    },
    SET_OPTIONS: (state, payload) => {
      state.options = payload;
    }
  },
});
