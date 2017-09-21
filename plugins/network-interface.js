import Vue from 'vue'

Vue.prototype.$hello = 'world'

export default function ({ app }) {
  app.$hello2 = 'world'
}
