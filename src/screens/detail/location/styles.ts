import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width * 0.8,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center'
  },
});
