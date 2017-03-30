import React, { Component } from 'react';

export default class FormText extends Component {

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
    const inputType = this.props.inputType ? this.props.inputType : 'text';
    const inputTypeClass = `ws-form-input__${inputType}`;

    return (
      <input type={inputType} className={`ws-form-input ${inputTypeClass}`} placeholder={this.props.placeholder} onChange={this.handleChange} />
    );
  }
};
