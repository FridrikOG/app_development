import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, Text, TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import styles from './styles';
import icon from '../../resources/photo-camera.png';

export default class ImagePickerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
  }

  pickImage = async () => {
    const { updateImage } = this.props;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ image: result.uri });
      updateImage(result.uri);
    }
  };

  render() {
    const { image } = this.state;
    return (
      <View style={styles.container}>
        { image && <Image source={{ uri: image }} style={styles.image} /> }
        <TouchableOpacity
          style={styles.button}
          onPress={this.pickImage}
        >
          <Image source={icon} style={styles.icon} />
          <Text>Pick an image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ImagePickerComponent.propTypes = {
  updateImage: PropTypes.func.isRequired,
};
