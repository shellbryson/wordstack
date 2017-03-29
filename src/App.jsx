import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import WordstackChart from './components/WordstackChart';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />

        <WordstackChart className="WordstackChart" />
      </div>
    );
  }
}

export default App;
