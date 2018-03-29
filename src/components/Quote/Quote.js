import React, { Component } from 'react';

import './Quote.css';

function Quote(props) {  
  if (props.isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="quote-container">
        <span className="quote">{props.quote}</span> -
          <span className="artist"> {props.author}</span>
        </div>
    )
  }
}

export default Quote;
