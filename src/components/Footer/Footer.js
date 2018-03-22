import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="footer">Written and coded by
          <a href="https://www.freecodecamp.org/d-pagey" target="_blank"
            className="footer-link">Pagey</a></p>
      </footer>
    )
  }
}

export default Footer;
