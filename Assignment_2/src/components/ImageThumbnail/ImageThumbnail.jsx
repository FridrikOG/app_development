import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ImageThumbnail = ({ file }) => (
  <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: file }}
  />
);

ImageThumbnail.propTypes = {
  file: PropTypes.string.isRequired,
};

export default ImageThumbnail;
