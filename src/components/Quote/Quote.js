import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {
  render() {
    return (
      <div className="quote-container">
        <span className="quote">Clicking this button should bring up a
          random quote in this place.</span>
        <span className="artist"></span>
      </div>
    )
  }
}

export default Quote;
