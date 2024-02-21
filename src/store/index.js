import {createStore} from 'vuex'


export default createStore({
  state: {
    usernom:null,
    firstname:'dit',
    lastname:'mec',
    nbMess:10
  },
  getters: {
    fullName: function(state){
        return state.firstname +" "+ state.lastname + " " + state.usernom;
    },

    Name: function(state){
      return state.usernom

    }
  },
  mutations: {
    connect: function(state,username){
      state.usernom= username
}

  },
  actions: {

  },
  modules: {

  }
})
