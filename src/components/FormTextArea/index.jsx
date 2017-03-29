import React, { Component } from 'react';

export default class WordstackFormTextArea extends Component {
  render() {
    return (
      <textarea className='ws-form-textarea' placeholder={this.props.placeholder}></textarea>
    );
  }
};
