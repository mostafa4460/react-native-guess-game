import { Text, View, Pressable, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => (
  <View style={styles.buttonOuterContainer}>
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonInnerContainer, styles.buttonPressed]
          : styles.buttonInnerContainer
      }
      onPress={onPress}
      android_ripple={{ color: COLORS.primary600 }}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  </View>
);

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
