let app = new Vue({
    // bind it to the #root div in the DOM
    el: "#root",
    // provide data for bindings
    data: {
      message: 'I really like bread',
    },
    computed: {
      screaming() {
        return this.message.toUpperCase();
      }
    }
  });