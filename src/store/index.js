//import { forEach } from 'core-js/core/dict';
import {createStore} from 'vuex'


export default createStore({
  state: {
    usernom:'',
    firstname:'dit',
    lastname:'mec',
    nbMess:1,

    messages:{
    destinataire :"",
    objet: "",
    contenue:"",
    },
  },
  getters: {
    fullName: function(state){
        return state.firstname +" "+ state.lastname + " " + state.usernom;
    },

    Name: function(state){
      
      return state.usernom

    },

    allMessage: function(state){
      return state.usernom

    }
  },
  mutations: {
    connect: function(state,username){
      state.usernom= username
},


  },
  actions: {

  },
  modules: {

  }
})
