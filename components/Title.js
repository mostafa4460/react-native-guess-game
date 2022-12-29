import { Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;

const styles= StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.secondary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.secondary500,
    padding: 12,
  }
});
