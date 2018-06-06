import React from 'react';

import './Buttons.css';

function Buttons({quote, fetchData}) {
  return (
    <div className="buttons">
      <button className="quote-button" onClick={fetchData}>
        Random Quote</button>
      <a href={quote} target="_blank"
        rel="noopener noreferrer">
        <i className="fa fa-twitter-square fa-3x social"></i></a>
    </div>
  )
}

export default Buttons;
