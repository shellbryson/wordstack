import React, { Component } from 'react';

export default class PageTitle extends Component {

  render() {
    return (
      <h1 className="ws-title">{this.props.title}</h1>
    );
  }

};
