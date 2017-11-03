import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;

    return (
      <div className='row'>
        <div className="introduction  jumbotron-fluid col-lg-12 col-md-6 col-sm-4">
          <h1 className='display-3'>Hi, I'm Mohammed</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a href="mailto:email@address.com" className='btn btn-primary btn-on-intro'>Get in touch</a>
          </p>

          <a href={personalInfo.github} className="jumboLink" target="_blank">
            <i className="fa fa-github icon iconOnJumbo"></i>
          </a>
          <a href={personalInfo.linkedIn} className="jumboLink" target="_blank">
            <i className="fa fa-linkedin icon iconOnJumbo"></i>
          </a>
        </div>
      </div>
    );
  }
}

Introduction.propTypes = {
  // personalInfo: PropTypes.object.isRequired
};
