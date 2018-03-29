import React, { Component } from 'react';

import './Buttons.css';

class Buttons extends Component {
  render() {

    const { quote } = this.props;

    return (
      <div className="buttons">
        <button className="quote-button" onClick={this.props.fetchData}>
          Random Quote</button>
        <a href={quote} target="_blank"
          rel="noopener noreferrer">
          <i className="fa fa-twitter-square fa-3x social"></i></a>
      </div>
    )
  }
}

export default Buttons;
