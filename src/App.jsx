import React, { Component } from 'react';
import './app.css';
import WordstackTitle from './components/PageTitle';
import WordstackSprintSelect from './components/SprintSelect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordstackTitle title="WordStack" />
        <WordstackSprintSelect />
      </div>
    );
  }
}

export default App;
