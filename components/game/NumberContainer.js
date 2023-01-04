import { Text, View, StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
);

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.secondary500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: COLORS.secondary500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
