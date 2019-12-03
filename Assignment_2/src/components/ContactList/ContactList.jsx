import React from 'react';
import {
  View, ScrollView, Text, FlatList,
} from 'react-native';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import styles from './styles';

const ContactList = ({ contacts }) => (
  <ScrollView style={styles.container}>
    <FlatList
      numColumns={2}
      data={contacts.sort((a,b) => a.name.localeCompare(b.name))}
      style={styles.flatlist}
      renderItem={({ item: { name, image } }) => (
        <View style={styles.contact}>
          <ImageThumbnail style={styles.image} file={image} />
          <Text style={styles.name}>
            {name}
          </Text>
        </View>
      )}
      keyextractor={() => contacts.id}
    />
  </ScrollView>
);
export default ContactList;
