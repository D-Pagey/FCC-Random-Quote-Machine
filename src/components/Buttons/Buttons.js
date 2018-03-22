import React, { Component } from 'react';

import './Buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div>
        <button className="quote-button" id="button">Random Quote</button>
        <a href="#" id="tweeter"><i className="fa fa-twitter-square fa-3x social"></i></a>
      </div>
    )
  }
}

export default Buttons;
