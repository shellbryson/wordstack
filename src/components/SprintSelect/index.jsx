import React, { Component } from 'react';
import SprintSelectButton from './button';
import FormButton from '../../components/FormButton/';

export default class SprintSelect extends Component {

  startSprint() {
    console.log("start sprint");
  };

  render() {
    return (
      <div>
        <SprintSelectButton buttonTitle="Timed" buttonAction="timed" triggerSprint={this.startSprint} />
        <SprintSelectButton buttonTitle="Until" buttonAction="until" triggerSprint={this.startSprint} />
        <FormButton title="Start"/>
      </div>
    );
  }
};
