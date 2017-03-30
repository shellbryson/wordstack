import React, { Component } from 'react';
import WordstackSprintSelectButton from './button';

export default class WordstackSprintSelect extends Component {

  render() {
    return (
      <div>
          <WordstackSprintSelectButton buttonTitle="Timed" buttonAction="timed" />
          <WordstackSprintSelectButton buttonTitle="Until" buttonAction="until" />
      </div>
    );
  }
};
