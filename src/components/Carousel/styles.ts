import { colors } from "@/tamagui/config";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    padding: 20,
    elevation: 3,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    width: Dimensions.get('window').width * 0.8,
    // height: Dimensions.get('window').width * 0.8,
    position: 'relative',
    overflow: 'hidden',
    rowGap: 20
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  }
})