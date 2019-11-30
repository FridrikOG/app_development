/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
import React from 'react';
import {
  ScrollView, View, Text, Image, FlatList, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import checkmark from '../../resources/select2.png';

const ListLists = (mainProps) => {
  const {
    props, lists, onLongPress, selectedIds,
  } = mainProps;
  const { navigation } = props;
  const { navigate } = navigation;
  return (
    <ScrollView style={styles.listContainer}>
      <FlatList
        numColumns={1}
        data={lists}
        extraData={selectedIds}
        renderItem={({ item: { id, name, color } }) => {
          const isSelected = selectedIds.indexOf(id) !== -1;
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              onLongPress={() => onLongPress(id)}
              onPress={() => navigate('Tasks', { listId: id, lists })}
            >
              <View style={[styles.container, { opacity: isSelected ? 0.5 : 1 }]}>
                <View
                  style={[styles.text, { backgroundColor: 'white', borderColor: color }]}
                >
                  {isSelected ? <Image source={checkmark} style={styles.selectIcon} name="checkcircleo" /> : <></>}
                  <Text style={{ flexDirection: 'row' }}>
                    <Text style={styles.listtitle}>
                      List:
                      {' '}
                    </Text>
                    <Text style={styles.listvalue}>
                      {id}
                    </Text>
                  </Text>
                  <Text style={{ flexDirection: 'row' }}>
                    <Text style={styles.listtitle}>
                      Name:
                      {' '}
                    </Text>
                    <Text style={styles.listvalue}>
                      {name}
                    </Text>
                  </Text>
                  <Text style={{ flexDirection: 'row' }}>
                    <Text style={styles.listtitle}>
                      Color code:
                      {' '}
                    </Text>
                    <Text style={styles.listvalue}>
                      Color code:
                      {' '}
                      {color}
                    </Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />

    </ScrollView>
  );
};


ListLists.propTypes = {
  navigation: PropTypes.objectOf(PropTypes).isRequired,
  navigate: PropTypes.func.isRequired,
};


export default ListLists;
