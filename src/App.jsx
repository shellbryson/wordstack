import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import WordstackChart from './components/Chart';
import WordstackFormText from './components/FormText';
import WordstackFormButton from './components/FormButton';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />

        <WordstackFormText className="" placeholder="Password" inputType="password"/>
        <WordstackFormButton className="" title="Start"/>

        <WordstackChart className="" />
      </div>
    );
  }
}

export default App;
