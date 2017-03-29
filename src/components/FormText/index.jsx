import React, { Component } from 'react';

export default class WordstackFormText extends Component {
  render() {
    return (
      <input type='text' className='ws-form-text' placeholder={this.props.placeholder}/>
    );
  }
};
