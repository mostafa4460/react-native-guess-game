import { StyleSheet, View, Text } from "react-native";
import COLORS from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => (
  <View style={styles.logItem}>
    <Text style={styles.itemText}>#{roundNumber}</Text>
    <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
  </View>
);

export default GuessLogItem;

const styles = StyleSheet.create({
  logItem: {
    borderWidth: 1,
    borderColor: COLORS.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
