import React from 'react';
import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {store} from '../../../config/redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path= "/" exact component={Dashboard}/>
          <Route path= "/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          {/* <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
