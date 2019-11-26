import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './style';


const Toolbar = ({ onAdd, onRemove }) => (
  <View style={styles.toolbar} styleName="horizontal">
    <TouchableHighlight onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove}>
      <Text style={styles.toolbarActionText}>Delete</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove}>
      <Text style={styles.toolbarActionText}>Modify</Text>
    </TouchableHighlight>
  </View>
);
export default Toolbar;
