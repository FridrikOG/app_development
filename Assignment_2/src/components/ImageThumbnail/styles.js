import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    borderRadius: Platform.OS === 'ios' ? 60 / 2 : 200 / 2,
}
});
