import { Text, View, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
);

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: COLORS.secondary500,
    fontSize: 36,
  },
});
