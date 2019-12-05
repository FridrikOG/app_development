/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ScrollView, Text, FlatList, Image, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import makeCall from 'react-native-phone-call';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import styles from './styles';
import call from '../../resources/telephone.png';

class ContactList extends React.Component {
  // Function that calls the react native phone call
  makeCall = (phone) => {
    const args = {
      number: phone,
      // variable to prompt the user if they want to make a call (works on iOs)
      prompt: false,
    };
    makeCall(args);
  }

  render() {
    const { contacts, navigate, updateState } = this.props;
    console.disableYellowBox = true;
    return (
      <ScrollView style={styles.container}>
        {navigate}
        <FlatList
          numColumns={1}
          data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
          style={styles.flatlist}
          renderItem={({
            item: {
              name, phone, image, id,
            },
          }) => (
            <View style={styles.contact}>
              <TouchableOpacity
                style={{ flexDirection: 'row' }}
                onPress={() => navigate('Details',
                  {
                    navigate: { navigate }, name, phone, image, id, updateState,
                  })}
              >
                <ImageThumbnail style={styles.image} file={image} />
                <Text style={styles.name}>
                  {name}
                </Text>
              </TouchableOpacity>
              <TouchableHighlight style={styles.iconBorder} onPress={() => this.makeCall(phone)}>
                <Image source={call} style={styles.callIcon} />
              </TouchableHighlight>
            </View>
          )}
          keyextractor={(item, index) => `${index}`}
        />
      </ScrollView>

    );
  }
}
ContactList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  updateState: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes)),
};

export default ContactList;
