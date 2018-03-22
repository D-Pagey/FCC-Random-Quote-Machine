import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Quote />
        <Buttons />
        <Footer />
      </div>
    );
  }
}

export default App;
