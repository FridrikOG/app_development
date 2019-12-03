/* eslint-disable no-undef */
import * as FileSystem from 'expo-file-system';

const baseDirectory = `${FileSystem.documentDirectory}contacts/`;

const stringAsync = (result) => {
  const newAsync = FileSystem.readAsStringAsync(`${baseDirectory}/${fileName}`);
  console.log('logging :', newAsync);
};

export const getAllContacts = async () => {
  const directory = await FileSystem.readDirectoryAsync(baseDirectory);
  return Promise.all(directory.map(async fileName => {
    const file = await FileSystem.readAsStringAsync(`${baseDirectory}/${fileName}`);
    return file;
  }));
}

// export const getAllContacts = () => {
//   console.log('Base direct : ', baseDirectory);
//   const dirAsync = FileSystem.readDirectoryAsync(baseDirectory)
//     .then((result) => {
//       console.log('the results: ', result);
//       const newAsync = FileSystem.readAsStringAsync(`${baseDirectory}/${'johann.json'}`, { encoding: FileSystem.EncodingType.UTF8 }).then();
//       console.log('newAsync :', newAsync);
//       stringAsync(result);
//     });
// };

// TODO:
// 1. Read the main directory for .json files readDirectoryAsync()
// 2. Read the files in UTF-8 readAsStringAsync()
// 3. Convert the content to a valid JS object

export const createContact = () => {
  const contact = {
    name: 'Johann Ketilsson',
    phone: '812029102',
  };
  const objStringified = JSON.stringify(contact);
  // TODO:
  // 1. Generate a file name
  // const fileName = 'Johann.json';
  // 2. Convert the contact to valid JSON
  // 3. Write to file system writeAsStringAsync()
  FileSystem.writeAsStringAsync((`${FileSystem.documentDirectory}contacts/` + 'johann.json'), objStringified);
  const getBack = FileSystem.writeAsStringAsync((`${FileSystem.documentDirectory}contacts/` + 'Ketil.json'), objStringified);
};

export const getContactByName = (name) => {
  console.log('ok');
};
