import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';
import Gallery from './Gallery'

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  
  openModal() {
    const project = this.props.project
    ModalManager.open(<MyModal project={project} onRequestClose={() => true} />);
  }


  render() {
    const { project } = this.props;
    const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    return (
      <div className="project-container row">
        <div className=" col-md-6" >
          <div className=" project-image center-block">
            <Gallery  project={project} />
          </div>
        </div>
        <div className=" col-md-6">
          <a href={project.project_url} className='link-to-project' target="_blank">
            <h2 className='project-link'>{project.title}</h2>
          </a>
          <a href={project.github_url} className='link-to-project' target="_blank">
            {project.github_url !== '' ? 'Github' : null}
          </a>
          <div className='secondry-text'>{project.date}</div>
          <h3>Background</h3>
          <div className='secondry-text'>{project.background}</div>
          <h3>Role</h3>
          <div className='secondry-text'>{project.role}</div>
          <h3>Tech Stack</h3>
          <div className="tech-icon-container">{techStackItems}</div>
          <hr />
        </div>
      </div>
    ); 
  }
}
Project.propTypes = {
  project: PropTypes.object.isRequired
};


