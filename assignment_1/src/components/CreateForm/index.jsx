import React from 'react';
import { View, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


const CreateForm = ({ isOpen }) => (
<View isOpen = {isOpen}>
  <FormLabel>Name</FormLabel>
  <FormInput onChangeText={someFunction}/>
  <FormValidationMessage>Error message</FormValidationMessage>
</View>
);

export default CreateForm;
