import { StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

const Card = ({ children }) => <View style={styles.card}>{children}</View>;

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});