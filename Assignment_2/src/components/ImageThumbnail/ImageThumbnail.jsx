import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const ImageThumbnail = ({ file }) => (
  <Image
    style={
      {
        width: 60, height: 60, alignSelf: 'center',
      }
    }
    resizeMode="cover"
    source={{ uri: file }}
  />
);

ImageThumbnail.propTypes = {
  file: PropTypes.string.isRequired,
};

export default ImageThumbnail;
