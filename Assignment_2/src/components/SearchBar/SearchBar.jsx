/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import search from '../../resources/search.png';

// This class should send a string a search string t contacts
class SearchBar extends React.Component {
    state = {
      searchString: '',
    }

    // This updates the name
    updateName(searchString) {
      // Updating name
      this.setState({ searchString });
      // Updating search string
      this.props.searchContacts(searchString);
    }

    render() {
      const { searchString } = this.state;
      const { searchContacts } = this.props;
      return (
        <View style={styles.searchBar}>
          <Image source={search} style={styles.icon} />
          <TextInput
            placeholder="Search..."
            placeholderTextColor="black"
            style={{ fontSize: 15, width: 300 }}
            value={searchString}
            onChangeText={(text) => this.updateName(text)}
          />
        </View>


      );
    }
}

export default SearchBar;
