import React from 'react';
import {
  View, ScrollView, Text, FlatList, Image
} from 'react-native';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import styles from './styles';
import call from '../../resources/telephone.png';

const ContactList = ({ contacts }) => (
  <ScrollView style={styles.container}>
    <FlatList
      numColumns={1}
      data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
      style={styles.flatlist}
      renderItem={({ item: { name, image } }) => (
        <View style={styles.contact}>
          <ImageThumbnail style={styles.image} file={image} />
          <Text style={styles.name}>
            {name}
          </Text>
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
