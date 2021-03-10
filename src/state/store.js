import Vue from 'vue';
import Vuex from 'vuex';
import {data} from '../data/tasksData'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      tasks: data,
    },
    mutations: {
      addNewTask(state,payload){
        state.tasks.push(payload);
      },
      removeElement(state,id){
        let elID = this.state.tasks.map(function(e) { return e.id; }).indexOf(id);;
        console.log(elID);
        state.tasks.splice(elID,1);
      }
    }
  })