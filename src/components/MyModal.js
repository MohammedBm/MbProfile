import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import TechStackItem from './projectComponents/TechStackItem';

export default class MyModal extends Component {
  render() {
    const { project, onRequestClose } = this.props;
        const techStackItems = project.tech_stack.map((tech, index) => {
      return <TechStackItem key={index} tech={tech} />;
    });

    return (
      < Modal
        onRequestClose={onRequestClose}
        className=''
        effect={Effect.Fall} >
        <div className="modal-header">
          <a href={project.project_url} className='link-to-project' target="_blank">
            <h2>{project.title}</h2>
          </a>
        </div>
        <div className="modal-body">
          <div className="screenshot-container img-responsive center-block">
            {project.gfycat ? <div className="gfyitem  " data-id="SilkyNextIrishwolfhound" ></div> : <img className='center-image' src={project.desktop_image} />}
          </div>
          <div className="project-info">
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
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-default" onClick={ModalManager.close}>Close</button>
          <button type="button" className="btn btn-primary" onClick={ModalManager.close}>OK</button>
        </div>
      </Modal >
    )
  }
}



{/* <Modal
  onRequestClose={onRequestClose}
  className=''
  effect={Effect.Fall}>
  <div className="modal-contaier">
    <div>
      <div className="screenshot-container">
        {project.gfycat ? <div className="gfyitem centered  " data-id="SilkyNextIrishwolfhound" ></div> : <img className='center-image' src={project.desktop_image} />}
      </div>
    </div>
    <div className="project-info">
      <a href={project.project_url} className='link-to-project' target="_blank">
        <h2 className="modal-header">{project.title}</h2>
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
    </div>
  </div>

  <button onClick={ModalManager.close}>Close Modal</button>
</Modal>
 */}
