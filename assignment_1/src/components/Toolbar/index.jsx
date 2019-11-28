import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';


const Toolbar = ({ onAdd, onRemove, onModify, hasSelectedIds }) => (
  <View style={styles.toolbar} styleName="horizontal">
    <TouchableHighlight onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Create</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove} disabled={!hasSelectedIds}>
      <Text style={[styles.toolbarActionText, hasSelectedIds ? {} : {color: 'rgba(155, 155, 155, 0.5)'}]}>Remove</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onModify}>
      <Text style={styles.toolbarActionText}>Modify</Text>
    </TouchableHighlight>
  </View>
);


Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove : PropTypes.func.isRequired,
  hasSelectedIds : PropTypes.bool.isRequired
}
export default Toolbar;
