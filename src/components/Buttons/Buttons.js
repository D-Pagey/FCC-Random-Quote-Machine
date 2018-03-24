import React, { Component } from 'react';

import './Buttons.css';

const twitterUrl = "https://twitter.com/intent/tweet?text=";

class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="quote-button" onClick={this.props.fetchData}>
          Random Quote</button>
        <a href={twitterUrl + this.props.quote} target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-twitter-square fa-3x social"></i></a>
      </div>
    )
  }
}

export default Buttons;
