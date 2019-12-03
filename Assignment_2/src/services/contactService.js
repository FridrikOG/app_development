/* eslint-disable no-undef */
import * as FileSystem from 'expo-file-system';

const baseDirectory = `${FileSystem.documentDirectory}contacts/`;

// TODO:
// 1. Read the main directory for .json files readDirectoryAsync()
// 2. Read the files in UTF-8 readAsStringAsync()
// 3. Convert the content to a valid JS object
// This function should get all contacts from the file
export const getAllContacts = async () => {
  // Read every file in the directory
  const directory = await FileSystem.readDirectoryAsync(baseDirectory);
  // Reading all content of every file - returning it as an array of json strings
  return Promise.all(directory.map(async (fileName) => {
    const file = await FileSystem.readAsStringAsync(`${baseDirectory}/${fileName}`);
    return file;
  }));
};

// TODO:
// 1. Generate a file name
// const fileName = 'Johann.json';
// 2. Convert the contact to valid JSON
// 3. Write to file system writeAsStringAsync()
// Writin to the file
// Takes in a contact a JSON object
export const createContact = () => {
  const contact = {
    id: 8,
    name: 'keikoLetilsson',
    phone: '812229102',
    image: 'https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/57064274_427566691144639_2781151500670337024_n.png?_nc_cat=108&_nc_ohc=jrx8znO_waEAQk1nTTjSoIwcEoAaKlml5A9btN8MmUWybfyWsexm98UMw&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=253f6ace253c561470f889f732508046&oe=5E87EDF3',
  };
  // Need to stringify the JSON object so that FileSystem can use it
  const objStringified = JSON.stringify(contact);

  let fileName = contact.name.replace(' ', '_');
  
  FileSystem.writeAsStringAsync((`${FileSystem.documentDirectory}contacts/` + fileName + '.json'), objStringified);
};

export const getContactByName = (name) => {
  console.log('ok');
};
