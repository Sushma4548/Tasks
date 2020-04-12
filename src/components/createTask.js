import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import "./static/css/App.css";


export default class CreateTaskPlan extends Component {
constructor(props){
    super(props);

    this.onChangeTaskname = this.onChangeTaskname.bind(this);
    this.onChangeTechnology = this.onChangeTechnology.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeProposedEndDate = this.onChangeProposedEndDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        taskname: '',
        technology:'',
        description:'',
        startDate: new Date(),
        proposedEndDate: new Date(),
        tasks: []
    }
}
componentDidMount() {
   axios.get('http://localhost:3000/tasks/')
     .then(response => {
       if(response.data.length > 0) {
           this.setState({
            tasks: response.data.map(tasks => tasks.taskname),
               taskname: response.data[0].taskname
           })
       }
   })
  }
onChangeTaskname(e) {
    this.setState({
        taskname: e.target.value
    });
}

onChangeTechnology(e) {
    this.setState({
      technology: e.target.value
    });
}
onChangeStartDate(date) {
    this.setState({
      startDate: date
    });
}
onChangeProposedEndDate(date) {
    this.setState({
      proposedEndDate: date
    });
}

onSubmit(e){
    e.preventDefault();

    const tasks = {
      taskname: this.state.taskname,
        technology: this.state.technology,
        startDate: this.state.startDate,
        proposedEndDate: this.state.proposedEndDate   
    }
    console.log(tasks);

    axios.post('http://localhost:3000/tasks/add', tasks)
         .then(res => console.log(res.data));

    window.location = '/';
}
render() {
return (
<div>
<h3>Create New Task</h3>
<form onSubmit={this.onSubmit}>
  <div className="form-group"> 
    <label>Taskname: </label>
  
    <input type="text"
        required
        className="form-control"
        value={this.state.taskname}
        onChange={this.onChangeTaskname}
        />
  </div>
  <div className="form-group"> 
    <label>Technology: </label>
    <input  type="text"
        required
        className="form-control"
        value={this.state.technology}
        onChange={this.onChangeTechnology}
        />
  </div>
  <div className="form-group">
    <label>Start Date </label>
    <div>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.onChangeStartDate}
      />
    </div>
    </div>
  <div className="form-group">
    <label>Proposed End Date </label>
    <div>
      <DatePicker
        selected={this.state.proposedEndDate}
        onChange={this.onChangeProposedEndDate}
      />
    </div>
  </div>

  <div className="form-group">
    <input type="submit" value="Create New Task" className="btn btn-primary" />
  </div>
</form>
</div>
)
}
}