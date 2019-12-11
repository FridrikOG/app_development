import React from 'react';
import NativeModal from 'react-native-modal';
import {
  View, Text, TouchableOpacity, WebView
} from 'react-native';
import styles from './styles';

const VideoModal = ({ isOpen, closeVideo, url }) => (
  <View style={styles.container}>
    <NativeModal
      isVisible={isOpen}
      onBackButtonPress={closeVideo}
      onSwipeComplete={closeVideo}
      SwipeDirection={['up', 'down']}
    >
      <Text>Trailer</Text>

      <WebView
        style={ styles.WebViewContainer }
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: url }}
      />
      <TouchableOpacity><Text>Close Video</Text></TouchableOpacity>
    </NativeModal>
  </View>
);



export default VideoModal;
