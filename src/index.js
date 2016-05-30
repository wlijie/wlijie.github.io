// import "babel-polyfill";
require('./css/common.css');
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
// require("./css/flat-ui.min.css");
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { IndexRoute } from 'react-router'
import { Redirect } from 'react-router'
import App from './components/App'
import Dashboard from './components/Dashboard'
import Inbox from './components/Inbox'
import About from './components/About'
import Message from './components/Message'
import Contacts from './components/Contacts'
import Internal_announcement from './components/Internal_announcement'
import Enterprise_networkdisk from './components/Enterprise_networkdisk'
ReactDom.render((
  <Router>
    <Route path="/" component={App}>
      {/* 当 url 为/时渲染 Dashboard */}
      <IndexRoute component={Dashboard} />
      <Route path="write_letter" component={About} />
      <Route path="messages/:id" component={Message} />
      <Route path="receiver" component={Inbox} />
      <Route path="contacts" component={Contacts} />
      <Route path="internal_announcement" component={Internal_announcement} />
      <Route path="Enterprise_networkdisk" component={Enterprise_networkdisk} />
    </Route>
  </Router>
), document.getElementById('app'))