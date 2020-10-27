import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#app',

  data: {
    counter: 0
  },

  methods: {
    btnCounter: function() {
      this.counter = this.counter
    }
  }
})
// Рекомендуется использовать МЕТОД в качестве обработчика события
