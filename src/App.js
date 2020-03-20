import React,  { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/navbar.component";
//import "./static/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TasksList from './components/tasksList';
import EditTask from './components/editTask';
import CreateTaskPlan from './components/createTask';

function App() {
 
  return (
    <Router>
     <div className = "container" >
      <NavbarApp />
      <br/>
    
       <Route path="/" exact component={TasksList} />
        <Route path="/edit/:id" component={EditTask} />
        <Route path="/create" component={CreateTaskPlan} />
        </div>
    </Router>
     
  );
}


export default App;
