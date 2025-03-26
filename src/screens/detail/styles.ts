import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  circleButton: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 40,
    height: 40,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width,
    borderRadius: 20,
  },
  container: {
    flex: 1,
  },
  semiTranslucent: {
    backgroundColor: '#FFFFFF30',
    borderRadius: 20,
    padding: 10,
  },
});