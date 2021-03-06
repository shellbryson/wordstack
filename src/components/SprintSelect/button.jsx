import React, { Component } from 'react';

export default class SprintSelectButton extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const btnAction = this.props.buttonAction;
    this.setState(
      { action: btnAction }
    );
    console.log(`clicked: sprint ${btnAction}`);

    if (btnAction === 'timed') {
      console.log('load sprint: timed');
      this.props.triggerSprint();
    } else if (btnAction === 'until') {
      console.log('load sprint: until');
      this.props.triggerSprint();
    }
  }

  render() {
    return (
      <div className='ws-sprint-select-button' onClick={this.handleClick}>
        {this.props.buttonTitle}
      </div>
    );
  }
};
