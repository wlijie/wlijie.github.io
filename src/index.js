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
import Home from './components/Home'
import Letter from './components/Letter'
import Message from './components/Message'
import Receiver from './components/Receiver'
import Contacts from './components/Contacts'
import Internal_announcement from './components/Internal_announcement'
import Enterprise_networkdisk from './components/Enterprise_networkdisk'
ReactDom.render((
  <Router>
    <Route path="/" component={App}>
      {/* 当 url 为/时渲染 Home */}
      <IndexRoute component={Home} />
      <Route path="letter" component={Letter} />
      <Route path="messages/:id" component={Message} />
      <Route path="receiver" component={Receiver} />
      <Route path="contacts" component={Contacts} />
      <Route path="internal_announcement" component={Internal_announcement} />
      <Route path="Enterprise_networkdisk" component={Enterprise_networkdisk} />
    </Route>
  </Router>
), document.getElementById('app'))