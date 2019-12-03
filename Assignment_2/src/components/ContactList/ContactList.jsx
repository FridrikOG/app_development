import React from 'react';
import {
  View, ScrollView, Text, FlatList, Image, TouchableOpacity
} from 'react-native';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import styles from './styles';
import call from '../../resources/telephone.png';

const ContactList = ({ contacts, navigate }) => (
  <ScrollView style={styles.container}>
    {navigate}
    <FlatList
      numColumns={1}
      data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
      style={styles.flatlist}
      renderItem={({ item: { name, phone, image } }) => (
        <View style={styles.contact}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() => navigate('Details',
              {
                navigate: { navigate }, name, phone, image
              })}
          >
            <ImageThumbnail style={styles.image} file={image} />
            <Text style={styles.name}>
              {name}
            </Text>
          </TouchableOpacity>
          <View style={styles.iconBorder}>
            <Image source={call} style={styles.callIcon} />
          </View>
        </View>
      )}
      keyextractor={() => contacts.id}
    />
  </ScrollView>
);
export default ContactList;
