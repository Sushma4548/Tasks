import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'Hi'
    };
  }
  render() {
    return (
      <form>
      <textarea value={this.state.description} />
      </form>
    );
  }
}
