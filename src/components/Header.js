import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { personalInfo } = this.props;
    // add nav-fixed-top if you want the navbar to be fixed

    return (
      <nav className="navbar navbar-fixed-top header">
        <div className="container">
          <div className="navbar-brand name-head">
            <a href="#" > {personalInfo.name} </a>
          </div>
          <div className="navbar-brand name-head">
            <a href="#Project" > Projects </a>
          </div>
          <ul className="nav navbar-nav pull-right">
            <li>
              <a href={personalInfo.resume} className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href={personalInfo.email} className="nav-link">
                <i className="fa fa-envelope Head"></i>
              </a>
            </li>
              <li>
                <a href={personalInfo.github} className="nav-link" target="_blank">
              <i className="fa fa-github Head"></i>
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedIn} className="nav-link" target="_blank">
              <i className="fa fa-linkedin-square Head"></i>
                </a>
              </li>
              <li>
                <a href={personalInfo.angelList} className="nav-link" target="_blank">
              <i className="fa fa-angellist Head"></i>
                </a>
              </li>
            </ul> 
        </div>
      </nav>
    );
  }
}
