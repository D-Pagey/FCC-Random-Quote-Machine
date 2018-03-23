import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {
  render() {
    return (
      <div className="quote-container">
        <span className="quote">{this.props.quote}</span> -
        <span className="artist"> {this.props.author}</span>
      </div>
    )
  }
}

export default Quote;
