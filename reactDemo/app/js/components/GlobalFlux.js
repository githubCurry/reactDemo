var React = require('react');
var Reflux= require('reflux');


var TodoActions = Reflux.createActions([
    'addItem'
]);

var TodoStore = Reflux.createStore({
    items: [1, 2],
    listenables: [TodoActions],
    onAddItem: function () {
        // $.post('/server/add', {data: model}, function (data) {
        //     this.items.unshift(data);
        //     this.trigger(this.items);
        // });
		this.trigger(this.items);
    }
});


exports.TodoActions = TodoActions;
exports.TodoStore = TodoStore;