import { Image, View, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import COLORS from "../constants/colors";

const GameOverScreen = () => (
  <View style={styles.screen}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/success.png")}
      />
    </View>
    <Text>Your phone needed X rounds to guess the number Y</Text>
  </View>
);

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
