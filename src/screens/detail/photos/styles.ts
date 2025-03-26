import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width * 0.7,
    height: 200,
    borderRadius: 20
  }
});