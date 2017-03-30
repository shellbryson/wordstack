import React, { Component } from 'react';

export default class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('changed');
  }

  render() {
    return (
      <select className='ws-form-select' onChange={this.handleChange}>
        <option className='ws-form-select__option'></option>
      </select>
    );
  }
};
