import React, { Component } from 'react';
import SprintSelectButton from './button';

export default class SprintSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      sprintType: "timed"
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setSprint = this.setSprint.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  setSprint(sp) {
    this.setState({ sprintType: sp } );
  }

  render() {
    return (
      <div>
        <SprintSelectButton sprintClick={this.setSprint} sprint="until"></SprintSelectButton>
        <SprintSelectButton sprintClick={this.setSprint} sprint="timed"></SprintSelectButton>
        <button onClick={this.handleClick} >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
};
