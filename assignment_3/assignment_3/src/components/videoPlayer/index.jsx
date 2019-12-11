import React from 'react';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import NativeModal from 'react-native-modal';
import styles from './styles';

const VideoModal = ({ isOpen, closeVideo, url }) => (
  <NativeModal
    isVisible={isOpen}
    onBackButtonPress={closeVideo}
    onSwipeComplete={closeVideo}
    SwipeDirection={['up', 'down']}
  >
    <View><Text>Something</Text></View>
  </NativeModal>
);
// <View>
//   <Text>Trailer</Text>
//   <Video
//     source={{ uri: 'https://www.youtube.com/embed/F95Fk255I4M?rel=0' }}// Can be a URL or a local file.
//     ref={(ref) => { this.player = ref; }}// Store reference
//     onBuffer={this.onBuffer}// Callback when remote video is buffering
//     onError={this.videoError}// Callback when video cannot be loaded
//     style={styles.backgroundVideo}
//   />
// </View>
export default VideoModal;
