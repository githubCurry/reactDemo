var React = require('react');
var Reflux= require('reflux');
var Header = require('./Header.js');
var TodoActions = require('./GlobalFlux.js').TodoActions;
var TodoStore = require('./GlobalFlux.js').TodoStore;

// console.error(TodoStore);
module.exports= React.createClass({
	// mixins: [Reflux.connect(TodoStore,'login')],
	onOpenDialog:function(){
		TodoActions.addItem();
	 },
	getInitialState: function () {
        return {
        	login: this.props.login
        };
    }, 
    componentWillUpdate: function(){
    
    },
	render:function(){
		return (<div className='header'><div className='outerWidth'>
		<span className="inlineB header_list"><i className="marg_left icon-list-ul icon-large"></i></span>
		<span className="inlineB header_find"><i className="marg_left icon-search icon-large"></i></span>
		<span className="inlineB"><img className='img_logo' src="app/images/logo.png" alt="logo"/></span>
		<span className="inlineB header_logo"><button className='marg_left btn btn-primary'><i className="icon-user width_logo"></i>登录</button></span>
		<span className="inlineB header_register"><button className='btn btn-primary' onClick={this.onOpenDialog}>注册</button></span>
		</div>
		</div>)
	}
})