import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

const url = "https://talaikis.com/api/quotes/random/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
    }
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        quote: data.quote,
        author: data.author
      }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Quote quote={this.state.quote} author={this.state.author}/>
        <Buttons />
        <Footer />
      </div>
    );
  }
}

export default App;
