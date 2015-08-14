// var React = require('react.min.js');
// var $ = require('jquery');
var React = require('react');
var Reflux = require('reflux');
var Header = require('./Header.js');
var TodoActions = require('./GlobalFlux.js').TodoActions;
var TodoStore = require('./GlobalFlux.js').TodoStore;


// module.exports = React.createClass({
//     mixins: [Reflux.connect(TodoStore, 'login')],
//     getInitialState: function() {
//         return {
//             login: "false",
//             register: "false"
//         };
//     },
//     render: function() {
//         return ( < div >

//         	< Header login = { this.state.login } />

//         	</div > );
//     }
// })
