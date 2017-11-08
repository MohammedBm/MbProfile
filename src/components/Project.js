import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';
import ProjectModal from './ProjectModal'
import MyModal from './MyModal'
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';

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
        <div className="project-container col-lg-6 col-md-12 col-sm-12">
          <a href="#openModal" className='link-to-project' onClick={this.openModal.bind(this)}>
              <h2 className='project-link'>{project.title}</h2>
          </a>
            <div className="project-info">
              <a href={project.github_url} className='link-to-project' target="_blank">
                {project.github_url !== '' ? 'Github' : null}
              </a>
              <div className='secondry-text'>{project.date}</div>
              <h3>Background</h3>
              <div className='secondry-text text-project'>{project.background}</div>
            </div>
        </div>
    ); 
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};


<div className="projezct-info">
</div>

