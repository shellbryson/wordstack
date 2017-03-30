import React, { Component } from 'react';
import SprintSelectButton from './button';
import FormButton from '../../components/FormButton/';

export default class SprintSelect extends Component {

  render() {
    return (
      <div>
        <SprintSelectButton buttonTitle="Timed" buttonAction="timed" />
        <SprintSelectButton buttonTitle="Until" buttonAction="until" />
        <FormButton title="Start" />
      </div>
    );
  }
};
