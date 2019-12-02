import * as FileSystem from 'expo-file-system';

const boardDirectory = `${FileSystem.documentDirectory}boards`;

const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

export const cleanDirectory = async () => {
    await FileSystem.deleteAsync(boardDirectory);
}

export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}

export const addImage = async imageLocation => {
    const folderSplit = imageLocation.split('/');
    const fileName = folderSplit[folderSplit.length - 1];
    await onException(() => copyFile(imageLocation, `${boardDirectory}/${fileName}`));

    return {
        name: fileName,
        type: 'image',
        file: await loadImage(fileName)
    };
}

export const remove = async name => {
    return await onException(() => FileSystem.deleteAsync(`${boardDirectory}/${name}`, { idempotent: true }));
}

export const loadImage = async fileName => {
    return await onException(() => FileSystem.readAsStringAsync(`${boardDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    }));
}

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(boardDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(boardDirectory);
    }
}

export const getAllImages = async () => {
    // Check if directory exists
    await setupDirectory();

    const result = await onException(() => FileSystem.readDirectoryAsync(boardDirectory));
    return Promise.all(result.map(async fileName => {
        return {
            name: fileName,
            type: 'image',
            file: await loadImage(fileName)
        };
    }));
}
