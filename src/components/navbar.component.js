import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class NavbarApp extends Component {
 
  render() {
    return (
      
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Task Management</Link>
      <div className="collpase navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
        <Link to="/" className="nav-link">Tasks List</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Create Task</Link>
        </li>
      </ul>
      </div>
    </nav>
    );
  }
}
