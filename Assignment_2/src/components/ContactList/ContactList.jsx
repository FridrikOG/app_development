import React from 'react';
import {
  View, ScrollView, Text, FlatList,
} from 'react-native';
import Gradient from 'react-native-css-gradient';
import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
import styles from './styles';


const ContactList = ({ contacts }) => (
  <ScrollView style={styles.container}>
    <Text>
      Contat List
    </Text>
    <FlatList
      numColumns={2}
      data={contacts}
      style={styles.flatlist}
      renderItem={({ item: { name, image } }) => (
        <Gradient gradient="linear-gradient(160deg,#eaf7f1,#d1e8e7,#bcd9e1,#aec7db,#9bc3e1,#68ceea,#19d8dd,#09dfb9">
          <View style={styles.contact}>
            <ImageThumbnail style={styles.image} file={image} />
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
        </Gradient>
      )}
      keyextractor={() => contacts.id}
    />
  </ScrollView>
);
export default ContactList;
