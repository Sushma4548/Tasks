import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


const Task = props => (
    <tr>
      <td>{props.task.taskname}</td>
      <td>{props.task.technology}</td>
      <td>{props.task.startDate.substring(0,10)}</td>
      <td>{props.task.proposedEndDate.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.task._id}>edit</Link> | <a href="# " onClick={() => { props.deleteTask(props.task._id) }}>delete</a>
      </td>
    </tr>
  )

export default class TasksList extends Component {
    constructor(props){
        super(props);

        this.deleteTask = this.deleteTask.bind(this);

        this.state = {tasks: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/tasks/')
        .then(response => {
            this.setState({ tasks: response.data })
        })
        .catch((error) =>{
            console.log(error);
        })
        
    }
    deleteTask(id) {
        axios.delete('http://localhost:3000/tasks/'+id)
        .then(res =>
           console.log(res));
        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        })
    }

  tasksList() {
        return this.state.tasks.map(currenttask => {
          return <Task task ={currenttask} deleteTask={this.deleteTask} key={currenttask._id}/>;
        })
      }

  render() {
    return (
        <div>
        <h3>Logged Tasks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Task Name</th>
              <th>Technology</th>
              <th>Start Date</th>
              <th>Proposed End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.tasksList() }
          </tbody>
        </table>
      </div>
    )
  }
}