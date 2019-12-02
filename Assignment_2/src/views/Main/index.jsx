import React from 'react';
import {
  View, Text, Image, TouchableHighlight, ImageBackground,
} from 'react-native';

import logo from '../../resources/phone.png';
import styles from './styles';
// import data from '../../resources/data';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style= { styles.backgroundImage } source={{uri: 'https://ph-files.imgix.net/651adc69-1ed9-47b3-8f6f-3a83ed0e2322?auto=format%2Ccompress%2Cenhance&dpr=2&crop=false&fit=max&w&h=500'}}>
          <View style={styles.logoBorder}>
            <Image style={styles.logo} source={logo} />
          </View>
          <Text style={styles.title}>Mr. Contact Johnson</Text>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>View Contact List</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

export default Main;
