import React from 'react';
import {
  View, ScrollView, Text, FlatList, Image, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import makeCall from 'react-native-phone-call';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import styles from './styles';
import call from '../../resources/telephone.png';
import deleteIcon from '../../resources/delete.png';


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
    return (
      <ScrollView style={styles.container}>
        {navigate}
        <FlatList
          numColumns={1}
          data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
          style={styles.flatlist}
          renderItem={({ item: { name, phone, image, id } }) => (
            <View>
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
              <TouchableOpacity style={styles.deleteButton}>
                <Image source={deleteIcon} style={styles.deleteIcon} />
                <Text style={styles.deleteText}>Delete Contact</Text>
              </TouchableOpacity>
            </View>
          )}
          keyextractor={() => contacts.id}
        />
      </ScrollView>

    );

  }
}
export default ContactList;
