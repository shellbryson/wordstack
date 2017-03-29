import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import WordstackChart from './components/Chart';
import WordstackFormTextArea from './components/FormTextArea';
import WordstackFormText from './components/FormText';
import WordstackFormButton from './components/FormButton';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />

        <WordstackFormText className="" placeholder="Project Title"/>
        <WordstackFormTextArea className="" placeholder="Description"/>
        <WordstackFormText className="" placeholder="Target"/>
        <WordstackFormButton className="" title="Start"/>

        <WordstackChart className="" />
      </div>
    );
  }
}

export default App;
