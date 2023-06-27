import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import NavBar from './components/navbar';


class App extends Component {

  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
 }
 
  handleDelete = counterId => {
      console.log('Delete function called', counterId);
      const counters = this.state.counters.filter(c => c.id !== counterId );
      this.setState({counters});
  }

  handleIncrement = counter => {
      console.log('on increment');
      console.log(counter);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter)
      counters[index].value++;
      this.setState({counters});        
  }

  handleReset = () => {
      console.log(' On Reset');
      console.log(this.state.counters);
      const newCounters = this.state.counters.map(counter => ({
          ...counter,
          value: 0,
        }));
      this.setState({ counters: newCounters });
  }


  render() { 
    return (  
    
    <React.Fragment>
      <NavBar />
        <main className='container'>
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/> 
        </main>
    </React.Fragment>);
  }
}
 
export default App;

