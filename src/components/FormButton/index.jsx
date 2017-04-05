import React, { Component } from 'react';

export default class FormButton extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <button className='ws-form-button' onClick={this.props.handleClick}>{this.props.title}</button>
    );
  }
};
