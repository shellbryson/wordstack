import React, { Component } from 'react';

export default class FormButton extends Component {
  render() {
    return (
      <button className='ws-form-button'>{this.props.title}</button>
    );
  }
};
