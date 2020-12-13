import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appoientment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
      <Switch>
      <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/appointment">
          <DashBoard></DashBoard>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
