import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { personalInfo } = this.props;
    return (
      <footer>
        <span id="footer-text-wrap">
          Built by {personalInfo.name} using <a href="https://github.com/react-portfolio/react-portfolio">React-Portfolio</a>. 
        </span>
      </footer>
    );
  }
}
