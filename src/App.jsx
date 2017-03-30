import React, { Component } from 'react';
import './app.css';
import WordstackTitle from './components/PageTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordstackTitle title="Hello World" />
      </div>
    );
  }
}

export default App;
