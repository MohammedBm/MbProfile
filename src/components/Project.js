import React, { Component, PropTypes } from 'react';
import Mobile from './projectComponents/Mobile.js';
import TechStackItem from './projectComponents/TechStackItem';

export default class Project extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { project } = this.props;
    const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech}/>;
    });

    return (
        <div className="project-container col-lg-6 col-md-12 col-sm-12">
          <div className="image-container centered" >
            <div className="screenshot-container">
              {project.gfycat ? <div className="gfyitem centered" data-id="SilkyNextIrishwolfhound" ></div> : <img className='center-image' src={project.desktop_image}/> }
            </div>
          </div>
            <div className="project-info">
            <a href={project.project_url}  className='link-to-project' target="_blank">
              <h2 className ='project-link'>{project.title}</h2>
            </a>
            <a href={project.github_url} className='link-to-project'target="_blank">
              {project.github_url !== '' ? 'Github' : null}
            </a>
            <div className='secondry-text'>{project.date}</div>
            <h3>Background</h3>
            <div className='secondry-text'>{project.background}</div>
            <h3>Role</h3>
            <div className='secondry-text'>{project.role}</div>
            <h3>Tech Stack</h3>
            <div className="tech-icon-container">{techStackItems}</div>
          </div>
        </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};
