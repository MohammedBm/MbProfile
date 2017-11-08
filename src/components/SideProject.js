import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';

export default class SideProject extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div>
        {/* <a href="#openModal">Open Modal</a>

        <div id="openModal" className="modalDialog">
          <div>
            <a href="#close" title="Close" className="close">X</a>
            <h2>Modal Box</h2>
            <p>This is a sample modal box that can be created using the powers of CSS3.</p>
            <p>You could do a lot of things here like have a pop-up ad that shows when your website loads, or create a login/register form for users.</p>
          </div>
        </div> */}
      </div>
    );
  }
}

SideProject.propTypes = {
  SideProject: PropTypes.object.isRequired
};
