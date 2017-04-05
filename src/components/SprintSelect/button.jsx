import React, { Component } from 'react';

export default class SprintSelectButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.onClick = this.clicker.bind(this);
  }

  clicker(e) {
    this.props.sprintClick( this.props.sprint );
  }

  render() {
    return (
      <div className='ws-sprint-select-button' onClick={(e) => this.clicker(e)}>
        {this.props.sprint}
      </div>
    );
  }
};
