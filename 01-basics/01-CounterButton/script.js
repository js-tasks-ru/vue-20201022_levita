import Vue from './vue.esm.browser.js';

export const app = new Vue({
  el: '#app',

  data: {
    counter: 0
  },

  methods: {
    btnCounter() {
      this.counter = this.counter + 1
    }
  }
})
