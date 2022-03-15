var app = new Vue({
    el: '#app',
    data: {
        todos: [{
          text: "make an app",
          completed: false,
        }, {
          text: "declare victory",
          completed: false,
        }, {
          text: "profit",
          completed: false
        }],
        message: '',
    },
    methods: {
        addItem() {
          this.todos.push({text: this.message, completed:false});
          this.message = '';
        },
    }

});