import React, { Component } from "react";
import { fetchPhotos } from "../../api/photos";

import PhotoGallery from "./PhotoGallery";

class PhotoGalleryContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    fetchPhotos().then(photos => this.setState({ photos }));
  }

  render() {
    const { photos } = this.state;
    const { match } = this.props;
    if (!photos.length) return <p>Loading...</p>;

    return <PhotoGallery photos={this.state.photos} match={match} />;
  }
}

export default PhotoGalleryContainer;
