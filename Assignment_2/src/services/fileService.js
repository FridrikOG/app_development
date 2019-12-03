import * as FileSystem from 'expo-file-system';

const contactDir = `${FileSystem.documentDirectory}contacts`;

const copyFile = async (file, newLocation) => FileSystem.copyAsync({
  from: file,
  to: newLocation,
});

const loadImage = async (fileName) => FileSystem.readAsStringAsync(`${contactDir}/${fileName}`, {
  encoding: FileSystem.EncodingType.Base64,
});

export const addContact = async (contactLocation) => {
  const folderSplit = imageLocation.split('/');
  const fileName = folderSplit[foldersplit.length - 1];
  await copyFile(contactLocation, `${contactLocation}/${fileName}`);

  return {
    name: fileName,
    file: await loadImage(fileName),
  };
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDir);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDir);
  }
};