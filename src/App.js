import React,  { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarApp from "./components/navbar.component";
//import "./static/css/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TasksList from './components/tasksList';
import EditTask from './components/editTask';
import CreateTaskPlan from './components/createTask';
//import viewTasks from './components/viewTasks';
import MyForm from './components/myForm';
import Register from './components/register';
import Login from './components/login';
function App() {
 
  return (
    <Router>
     <div className = "container" >
      <NavbarApp />
      <MyForm/>
      <br/>
    
       <Route path="/" exact component={TasksList} />
       {/* <Route path="/viewTasks" exact component={viewTasks} />*/}
        <Route path="/edit/:id" component={EditTask} />
        <Route path="/create" component={CreateTaskPlan} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        </div>
    </Router>
     
  );
}


export default App;
