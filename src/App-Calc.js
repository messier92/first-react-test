import React, {Component} from 'react';

import data from './covid19test.json';
import './App.css';
import Calculator from './components/Calculator'

console.log(data); // output data testing

class App extends Component {

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">React Calculator</h1>
      </header>

      <Calculator/>
      </div>
    );
  }
}
export default App;
