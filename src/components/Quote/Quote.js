import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {
  render() {
    return (
      <div>
        <span className="quote" id="quote">Clicking this button should bring up a
          random quote in this place.</span>
        <span className="artist" id="artist"></span>
      </div>
    )
  }
}

export default Quote;
