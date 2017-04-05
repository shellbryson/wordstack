import React, { Component } from 'react';
import './app.css';
import PageTitle from './components/PageTitle';
import SprintSelect from './components/SprintSelect';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PageTitle title="WordStack" />
        <SprintSelect />
      </div>
    );
  }
}

export default App;
