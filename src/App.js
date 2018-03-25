import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
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

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
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
        <Modal />
        <Header />
        <Quote quote={this.state.quote} author={this.state.author} />
        <Buttons fetchData={this.fetchData} quote={this.state.quote} />
        <Footer />
      </div>
    );
  }
}

export default App;

/* To Do:
- add catch for fetch method
- add disable/enable state
- add isLoading?
- add Modal
- responsive design
*/
