import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { personalInfo } = this.props;

    return (
      <div>
        <button className='btn btn-primary btn-on-intro' onClick={this.handleOpenModal}>More Info</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <div className=''>
            <div className='text-center'>
            <img className='img-on-about' src="https://preview.ibb.co/iq91Qw/Mohammed_Bamhraz1_Cropped.jpg" alt="Mohammed_Bamhraz1_Cropped" border="0"/>
            <h4>Mohammed Bamhraz</h4>
            </div>
            <div>
            <br />
            <br />
            <br />
            <br />
            <div className='container-on-about '>
                <h2 className='text-center  '>Hey There!!</h2>
                <br />
                <p>
                  I'm Mohammed; I'm Junior Full-Stack Developer graduate from CodeCore Web Developer Bootcamp. Currently, I work primarily with React and React-Native 
                </p>
                <p>
                  Have a look through my projects.  Need help with an upcoming project or application? Learn More About me!                
                </p>
                <p>
                  E-mail: mohmedbamhrz@gmail.com
                </p>
                  <br />
                <div className='text-center'>
                  <a href={personalInfo.github} className="" target="_blank">
                    <i className="fa fa-github icon resume-on-about icon-on-about"></i>
                  </a>
                  <a href={personalInfo.linkedIn} className="" target="_blank">
                    <i className="fa fa-linkedin icon resume-on-about icon-on-about"></i>
                  </a>
                  <a href={personalInfo.email} className="">
                    <i className="fa fa-envelope icon resume-on-about icon-on-about"></i>
                  </a>
                  <a href={personalInfo.resume} className="resume-on-about " target="_blank" style={{ lineHeight: 'none' }}>
                    Resume
                  </a>
                </div>
                <br />
                <div className='text-center'>
                <button className='btn btn-primary btn-on-intro btn-on-about text-center' onClick={this.handleCloseModal}>Close Modal</button>

                </div>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
