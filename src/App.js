import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Home/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Order/Order';
import ServiceList from './components/ServiceList/ServiceList';
import Review from './components/Review/Review';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/service-list">
            <ServiceList />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
