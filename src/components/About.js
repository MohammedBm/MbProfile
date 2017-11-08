import React, { Component, PropTypes } from 'react';

export default class About extends Component {
  render() {
    const { personalInfo } = this.props;

    return (
      <div className='row'>
        <div className="about col-lg-12 col-md-6 col-sm-12">
            <div className=' col-lg-6 col-md-12 col-sm-12'>
              <h3 >
                About
              </h3>
              <p className='secondry-text about'>
                I create awesome looking website using different technoliges. specialising in web design and mobile with experience in front-end development using React and React-Native.
              </p>
            </div>
            <article className='col-lg-6  col-md-6 col-sm-12 article-skills '>
              <ul className='secondry-text list'>
                <h3 className='header-skills'>
                  What I Do
                </h3>
                <li className='list-item'>APP/WEBSITE DEVELOPMENT</li>
                <li className='list-item'>MOBILE APP</li>
                <li className='list-item'>STATIC WEB DEVELOPMENT</li>
                <li className='list-item'>USER TESTING</li>
                <li className='list-item'>INTERACTIONS DESIGN</li>
                <li className='list-item'>UI/UX DESIGN</li>
              </ul>
            </article>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  // personalInfo: PropTypes.object.isRequired
};
  