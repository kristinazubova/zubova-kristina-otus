import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    duration: 1,
    complexity: 1,
    operations: {
      sum: true,
      substract: false,
      multipl: false,
      division: false,
      exponent: false
    },
    answerCounter: 0  
  },
  mutations: {
    changeDuration(state, duration) {
      state.duration = duration;
    },
    changeComplexity(state, complexity) {
      state.complexity = complexity;
    },
    addOperation(state, type) {
      state.operations[type] = true;
    },
    deleteOperation(state, type) {
      state.operations[type] = false;
    },
    incrementAnswerCounter(state) {
      state.answerCounter++;
    },
    clearAnswerCounter(state) {
      state.answerCounter = 0;
    }
  }
})