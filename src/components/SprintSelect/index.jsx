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

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  setSprint() {
    let sprint = this.state.sprintType;
    console.log(this.sprint);
    if (sprint==="until") {
      this.setState({sprintType: "timed"});
    } else {
      this.setState({sprintType: "until"});
    }
    console.log(this.state.sprintType);
  }

  render() {
    return (
      <div>
        <SprintSelectButton onClick={this.setSprint} sprint="until" title="until"></SprintSelectButton>
        <SprintSelectButton onClick={this.setSprint} sprint="timed" title="timed"></SprintSelectButton>
        <button onClick={this.handleClick} >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
};
