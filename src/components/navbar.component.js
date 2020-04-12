import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class NavbarApp extends Component {
 
  render() {
    return (
      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="navbar-brand">Task Management</div>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Tasks List</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create Task</Link>
        </li>
      </ul>
      <li className="navbar-item">
        <Link to="/register" className="nav-link">Sign Up</Link>
        </li>
        <li className="navbar-item">
        <Link to="/login" className="nav-link">Login</Link>
        </li>
      </div>
    </nav>
    );
  }
}
