import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Quote from './components/Quote';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

const url = "https://talaikis.com/api/quotes/random/";
const twitterUrl = "https://twitter.com/intent/tweet?text=";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
      isLoading: false
    }

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    this.fetchData();
  }

  fetchData() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        quote: data.quote,
        author: data.author,
        isLoading: false
      }))

      .catch(function(error) {
        console.log("Something went wrong");
      })
  }

  render() {
    return (
      <div className="App">
        <Modal />
        <Header />
        <Quote quote={this.state.quote} author={this.state.author}
          isLoading={this.state.isLoading} />
        <Buttons fetchData={this.fetchData} quote={twitterUrl + this.state.quote} />
        <Footer />
      </div>
    );
  }
}

export default App;
