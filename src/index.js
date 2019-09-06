import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './components/Jss/SignIn'
import SignUp from './components/Jss/SignUp'
import ProfilePage from './components/Jss/ProfilePage'
import ErrorPage from './components/Jss/ErrorPage'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById('root'));
var hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
      <Switch>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route path="/ErrorPage" component={ErrorPage} />
        <Route path="/" component={App} />
      </Switch>
    </Router>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
