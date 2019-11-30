import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';


const Toolbar = ({ onAdd, onRemove, onModify, hasSelectedIds, canModify }) => (
  <View style={styles.toolbar} styleName="horizontal">
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd} disabled={hasSelectedIds}>
      <Text style={[styles.toolbarActionText, hasSelectedIds ? {color: '#85adad'} : {}]}>Add</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onRemove} disabled={!hasSelectedIds}>
      <Text style={[styles.toolbarActionText, hasSelectedIds ? {} : {color: '#85adad'}]}>Remove</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.toolbarAction} onPress={onModify} disabled={!canModify}>
      <Text style={[styles.toolbarActionText, canModify ? {} : {color: '#85adad'}]}>Modify</Text>
    </TouchableHighlight>
  </View>
);
export default Toolbar;

/*
Toolbar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove : PropTypes.func.isRequired,
  hasSelectedIds : PropTypes.bool.isRequired
}


*/
