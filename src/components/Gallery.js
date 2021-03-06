import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images';

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.project.desktop_image.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const { project } = this.props;
    console.log(project.desktop_image)
    if (!project) return;

    const gallery = [project.desktop_image[0]].map((obj, i) => {
      return (
        <a
          href={obj.src}
          className={css(classes.thumbnail, classes[obj.orientation])}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail} className={css(classes.source)} />
        </a>
      );
    });

    return (
      <div className={css(classes.gallery)}>
        {gallery}
      </div>
    );
  }
  render() {
    const { project } = this.props;

    return (
      <div className="section ">
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={project.desktop_image}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          showThumbnails={this.props.showThumbnails}
          theme={this.props.theme}
        />
      </div>
    );
  }
}






Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
};

const gutter = {
  small: 12,
  large: 12,
};

const classes = StyleSheet.create({
  gallery: {
    marginRight: -gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      marginRight: -gutter.large,
    },
  },

  // anchor
  thumbnail: {
    boxSizing: 'border-box',
    display: 'block',
    paddingRight: gutter.small,
    paddingBottom: gutter.small,
    overflow: 'hidden',

    '@media (min-width: 500px)': {
      paddingRight: gutter.large,
      paddingBottom: gutter.large,
    },
  },

  // orientation
  landscape: {
    width: '120%',
  },
  square: {
    paddingBottom: 0,
    width: '120%',

    '@media (min-width: 500px)': {
      paddingBottom: 0,
    },
  },

  // actual <img />
  source: {
    border: 0,
    display: 'block',
    height: '100%',
    width: '100%',
  },
});

export default Gallery;
// 