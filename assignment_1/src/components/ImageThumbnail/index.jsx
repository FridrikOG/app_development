import React from 'react';
import { Image } from 'react-native';

const ImageThumbnail = ({ file }) => (
  
  <Image
    style={{width:50,height:50}}
    resizeMode="cover"
    source={{uri:file}} />
);

export default ImageThumbnail;
