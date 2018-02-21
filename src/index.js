import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Main from './Main';
import Signup from './Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';    
import registerServiceWorker from './registerServiceWorker';
import Portfolio from './Portfolio';
import Account from './Account';

ReactDOM.render(<BrowserRouter>
    <div>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/login.htm' component={Login} />
      <Route exact path='/signup.htm' component={Signup} />
      <Route exact path='/my-account.htm' component={Account} />
      <Route exact path='/portfolio.htm' component={Portfolio} />
    </Switch>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();


