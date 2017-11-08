import React, { Component, PropTypes } from 'react';

export default class Introduction extends Component {
  render() {
    const { personalInfo } = this.props;

    return (
      <div className='row'>
        <div className=" jumbotron-on-intro col-lg-6 col-md-6 col-sm-12">
          <h1 className='hi-3'>Hi, I'm Mohammed</h1>
          <div className='lead text-on-jumbo'> 
          <p>Full-stack web developer, trained in Ruby, Ruby on Rails, Node, Javascript, C++ and others. Open to opportunities.</p>
          <hr />
          <p >Currently working on React and React-Native. Looking for challenging projects to build!</p>
          </div>
          <br />
          <br />
          <p className="lead">
            <a href="mailto:email@address.com" className='btn btn-primary btn-on-intro'>Get in touch</a>
          </p>
          <br />  
          <a href={personalInfo.github} className="jumboLink" target="_blank">
            <i className="fa fa-github icon iconOnJumbo"></i>
          </a>
          <a href={personalInfo.linkedIn} className="jumboLink" target="_blank">
            <i className="fa fa-linkedin icon iconOnJumbo"></i>
          </a>
        </div>
        <div className='col-lg-6 col-md-6 hidden-sm hidden-xs'>
          <img src="http://svgshare.com/i/3ia.svg" height='600px'  />
        </div>
      </div>
    );
  }   
}

Introduction.propTypes = {
  // personalInfo: PropTypes.object.isRequired
};
