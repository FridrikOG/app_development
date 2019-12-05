/* eslint-disable no-undef */
import * as FileSystem from 'expo-file-system';

const baseDirectory = `${FileSystem.documentDirectory}contacts/`;

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(baseDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(baseDirectory);
  }
};
// TODO:
// 1. Read the main directory for .json files readDirectoryAsync()
// 2. Read the files in UTF-8 readAsStringAsync()
// 3. Convert the content to a valid JS object
// This function should get all contacts from the file
export const getAllContacts = async () => {
  await setupDirectory();
  // Read every file in the directory
  const directory = await FileSystem.readDirectoryAsync(baseDirectory);
  // Reading all content of every file - returning it as an array of json strings
  return Promise.all(directory.map(async (fileName) => {
    const file = await FileSystem.readAsStringAsync(`${baseDirectory}${fileName}`);
    return file;
  }));
};

export const containsContact = async (name) => {
  const directory = await FileSystem.readDirectoryAsync(baseDirectory);
  // let fileName = name.toLowerCase();
  let fileName = name.toLowerCase().replace(/ /g, '-');
  return directory.indexOf(`${fileName}.json`);
};
// TODO:
// 1. Generate a file name
// const fileName = 'Johann.json';
// 2. Convert the contact to valid JSON
// 3. Write to file system writeAsStringAsync()
// Writin to the file
// Takes in a contact a JSON object
// Used to add the contact to the device
export const createContact = async (contact) => {
  // checking if the contact already exists
  if (await containsContact(contact.name) === -1) {
    // Need to stringify the JSON object so that FileSystem can use it
    const objStringified = JSON.stringify(contact);
    // REplace the spaces with an '-' as per the assignment description
    // let fileName = contact.name.toLowerCase();
    let fileName = contact.name.toLowerCase().replace(/ /g, '-');
    // Writing the object to the
    FileSystem.writeAsStringAsync((`${baseDirectory}${fileName}.json`), objStringified);
    return true;
  }
  return false;
};

export const cleanDirectory = async () => {
  await FileSystem.deleteAsync(baseDirectory);
};

export const deleteContact = (name) => {
  // console.log("Inside deleteContact ... ", contact.name);
  // let fileName = name.toLowerCase();
  let fileName = name.toLowerCase().replace(/ /g, '-');
  console.log('Goes to delete this filename: ', fileName);
  FileSystem.deleteAsync(`${baseDirectory}${fileName}.json`);
};
