import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';

export default class   extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lightboxIsOpen: true,
      currentImage: 0,
    };
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this);

  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox(){
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }


  render() {
    const { project } = this.props;
    return (
      <div>
        <Lightbox
          isOpen={this.state.lightboxIsOpen}
          currentImage={this.state.currentImage}
          images={project.desktop_image}
          onClose={this.closeLightbox}
        
        />
      </div>
    );
  }
}
