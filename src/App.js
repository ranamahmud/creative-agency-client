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
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import ServiceListAdmin from './components/ServiceListAdmin/ServiceListAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/order" component={Order} />
          <PrivateRoute path="/service-list" component={ServiceList} />
          <PrivateRoute path="/service-list-admin" component={ServiceListAdmin} />
          <PrivateRoute path="/review" component={Review} />
          <PrivateRoute path="/add-service" component={AddService} />
          <PrivateRoute path="/make-admin" component={MakeAdmin} />
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
