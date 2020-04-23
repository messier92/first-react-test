import React, {Component} from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

// Should load the .csv data here so that the data can be passed between the child components

class App extends Component {
      state = {
      counters: [
       {id:1, value: 2020},
       {id:2, value: 0},
       {id:3, value: 0},
       {id:4, value: 0}
      ]
    };

    // Called once
    constructor() {
      super();
      console.log("App - Constructor")
    }

    componentDidMount() {
      console.log("App - Mounted")
    }

    // takes a counter parameter
    handleIncrement = counter => {
      // clone the counters array
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter};
      counters[index].value++;
      this.setState({counters});
    }

    // void function
    handleReset = () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({counters});
    };

    // takes a counterId parameter
    handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
    };

  // transfer the functions from the child Counters class to here
  render() {
    console.log("App - Rendered")
    return (
      <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c=>c.value >0).length} />

      <main className="container"> 
      <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
      </main>
      </React.Fragment>
      );
  }
}

export default App;
