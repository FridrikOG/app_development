import React from 'react';
import NativeModal from 'react-native-modal';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import back from '../../resources/images/left-arroww.png';

const VideoModal = ({ isOpen, closeVideo, url }) => (
  <View style={(isOpen ? { width: 500, heigh: 500 } : {})}>
    <NativeModal
      isVisible={isOpen}
      hasBackDrop
      onBackButtonPress={closeVideo}
      onSwipeComplete={closeVideo}
      SwipeDirection={['up', 'down']}
    >
      <WebView
        style={styles.WebViewContainer}
        javaScriptEnabled
        domStorageEnabled
        source={{ uri: url }}
      />
      <TouchableOpacity style={styles.closeBtn} onPress={closeVideo}>
        <Image source={back} style={styles.backIcon} />
        <Text style={styles.closeText}>CLOSE VIDEO</Text>
      </TouchableOpacity>
    </NativeModal>
  </View>
);


export default VideoModal;
