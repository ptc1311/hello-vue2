import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: "hello",
    userList : [
      {
        id : 1,
        name : "John"
      },
      {
        id : 2,
        name : "Sarsh"
      },
    ],
    name: "Eudora"
  },
  getters: {
    nameLength: (state) => {
      return state.name.length;
    }
  },
  mutations: {
    NAME(state, status) {
      state.name = status;
    }
  },
  actions: {
    updateName(context, status) {
      context.commit("NAME", status);
    }
  },
  modules: {
  }
})
