import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';

export default class SideProject extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div className="project-container col-lg-6 col-md-12 col-sm-12">
        hello 
      </div>
    );
  }
}

SideProject.propTypes = {
  SideProject: PropTypes.object.isRequired
};
