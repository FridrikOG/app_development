/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { View, Text, TextInput } from 'react-native';

// import ImageThumbnail from '../ImageThumbnail/ImageThumbnail';
// import styles from './styles';

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
        <View>
          <TextInput
            placeholder="Search..."
            value={searchString}
            onChangeText={(text) => this.updateName(text)}
          />
          <Text> dsfkasdfksdkf</Text>
        </View>


      );
    }
}

export default SearchBar;
