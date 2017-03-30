import React, { Component } from 'react';

export default class WordstackFormText extends Component {

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
    const inputType = this.props.inputType;

    return (
      <input type={inputType ? (this.props.inputType):('text')} className='ws-form-input' placeholder={this.props.placeholder} onChange={this.handleChange} />
    );
  }
};
