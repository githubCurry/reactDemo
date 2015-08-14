
var React = require('react');
var ReactRouter = require('react-router');  
var Routes = ReactRouter.Routes;  
var Route = ReactRouter.Route;
// var ReactApp = require('./components/ReactApp.js')
// var mainCom = React.render(
// 	<ReactApp />,
// 	document.getElementById('app')
// )

var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getInitState: function(){
    return {
      user:"user",
      bar :"bar"
    }
  },
  render: function () {
    var user = 'ss'
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="index">Inbox</Link></li>
            <li><Link to="Calendar" params={{id:user}}>Inbox</Link></li>
          </ul>
        </header>

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

var Calendar = React.createClass({
  render: function () {
     var id = this.props.params.id;
     alert(id)
    return (
      <div>
      CalendarCalendarCalendarCalendarCalendarCalendar
        <RouteHandler/>
      </div>
    );
  }
});

var Index = React.createClass({
  render: function () {
    return (
      <div>
      IndexIndexIndexIndexIndexIndex
        <RouteHandler/>
      </div>
    );
  }
});
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="index" path="index" handler={Index}/>
    <Route name="Calendar" path="Calendar/:id" handler={Calendar}/>
  </Route>
);
var Message = React.createClass({
  render () {
    return <h3>Message</h3>;
  }
});

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});