import React from 'react';
import {
  View, ScrollView, Text, Image, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
// import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
// import styles from './styles';


const ContactList = ({
  boards,
}) => (
  <ScrollView >
    <Text >
          Board List
    </Text>
    <FlatList
      numColumns={1}
      data={boards}
      renderItem={({
        item: {
          name,
        },
      }) => {
        return (
            <View>
              <Text>
                Name:
                {' '}
              </Text>
              <Text >
                {name}
              </Text>
              <Text >
                Description:
                {' '}
              </Text>
            </View>
        );
      }}
      keyExtractor={(board) => board.id}
    />
  </ScrollView>
);
export default ContactList;
