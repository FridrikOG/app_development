import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './style';


const Toolbar = ({ onAdd, onRemove, onModify, hasSelectedIds }) => (
  <View style={styles.toolbar} styleName="horizontal">
    <TouchableHighlight onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove} disabled={!hasSelectedIds}>
      <Text style={[styles.toolbarActionText, hasSelectedIds ? {} : {color: 'rgba(155, 155, 155, 0.5)'}]}>Delete</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onModify}>
      <Text style={styles.toolbarActionText}>Modify</Text>
    </TouchableHighlight>
  </View>
);
export default Toolbar;
