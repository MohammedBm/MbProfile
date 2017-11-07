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
                Incididunt eu adipisicing dolor occaecat mollit reprehenderit deserunt id.Ullamco amet incididunt occaecat sunt ex aute ea voluptate do enim consequat fugiat dolore Lorem. Et dolore anim pariatur do culpa ullamco id sint sint dolore eu qui consectetur sunt. Voluptate non magna reprehenderit dolore est deserunt reprehenderit nulla. Anim qui et quis fugiat culpa incididunt officia. Cillum laboris dolor labore veniam Lorem ad excepteur dolor tempor culpa ullamco dolor voluptate. Eiusmod veniam fugiat ullamco culpa minim. Cillum reprehenderit veniam sit sunt fugiat.
              </p>
            </div>
            <article className='col-lg-6  col-md-6 col-sm-12 article-skills '>
            <ul className='secondry-text list'>
            <h3 className='header-skills'>
              What I Do
            </h3>
            <li className='list-item'>UI/UX DESIGN</li>
            <li className='list-item'>MOBILE/WEB APPS</li>
            <li className='list-item'>STATIC WEB DEVELOPMENT</li>
            <li className='list-item'>PROTOTYPING</li>
            <li className='list-item'>USER TESTING</li>
            <li className='list-item'>INTERACTIONS DESIGN</li>
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
