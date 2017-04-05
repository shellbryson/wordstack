import React, { Component } from 'react';

export default class SprintSelectButton extends Component {

  render() {
    return (
      <div className='ws-sprint-select-button' onClick={this.props.onClick}>
        {this.props.buttonTitle}
      </div>
    );
  }
};
