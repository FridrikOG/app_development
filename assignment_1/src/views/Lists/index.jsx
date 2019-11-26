import React from 'react';
import { View, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';
import ListLists from '../../components/ListLists';

const Lists = () => (
  <View>
    <Toolbar />
    <Text style={{ padding: 100, textAlign: 'center' }}>
        You're in our lists
    </Text>
    <ListLists images={ data.board}/>
    <Text>  above should be datafsdafdsf</Text>
  </View>
);

export default Lists;
