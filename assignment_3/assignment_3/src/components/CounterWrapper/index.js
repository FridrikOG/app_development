import React from 'react';
import { View, StyleSheet } from 'react-native';

const CounterWrapper = ({ children }) => (
  <View>
    { children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterWrapper;
