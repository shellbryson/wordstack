import React, { Component } from 'react';

export default class FormTextArea extends Component {
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
      <textarea className='ws-form-textarea' placeholder={this.props.placeholder} onChange={this.handleChange}></textarea>
    );
  }
};
