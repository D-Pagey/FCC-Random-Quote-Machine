import React, { Component } from 'react';

import './Quote.css';

class Quote extends Component {
  render() {
      if (this.props.isLoading) {
        return <p>Loading...</p>
      } else {
        return (
          <div className="quote-container">
            <span className="quote">{this.props.quote}</span> -
              <span className="artist"> {this.props.author}</span>
            </div>
        )
      }
  }
}

export default Quote;
