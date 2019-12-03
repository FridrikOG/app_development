import * as FileSystem from 'expo-file-system';

const baseDirectory = FileSystem.documentDirectory;

export const getAllContacts = () => {
  // TODO: 
  // 1. Read the main directory for .json files readDirectoryAsync()
  // 2. Read the files in UTF-8 readAsStringAsync()
  // 3. Convert the content to a valid JS object
};

export const createContact = contact => {
  // TODO:
  // 1. Generate a file name
  // 2. Convert the contact to valid JSON
  // 3. Write to file system writeAsStringAsync()
};

export const getContactByName = name => {
    
};