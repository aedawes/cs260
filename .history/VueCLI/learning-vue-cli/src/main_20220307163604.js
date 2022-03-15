import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

let data = {
  currentID: 2,
  tickets: [{
    id: 1,
    problem: 'This app is not completely written yet.',
    name: 'Emma'
  }],
  getTickets() {
    return this.tickets;
  },
  addTicket(name, problem) {
    this.tickets.push({
      id: this.currentID,
      name: name,
      problem: problem
    });
    this.currentID += 1;
  }
}