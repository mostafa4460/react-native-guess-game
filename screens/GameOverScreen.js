import { Image, View, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from '../components/ui/PrimaryButton';
import COLORS from "../constants/colors";

const GameOverScreen = ({ numGuesses, userNumber, restartGameHandler }) => (
  <View style={styles.screen}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/success.png")}
      />
    </View>
    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlight}>{numGuesses}</Text> rounds to guess
      the number <Text style={styles.highlight}>{userNumber}</Text>.
    </Text>
    <PrimaryButton onPress={restartGameHandler}>Start New Game</PrimaryButton>
  </View>
);

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: deviceWidth < 380 ? 200 : 300,
    width: deviceWidth < 380 ? 200 : 300,
    borderRadius: deviceWidth < 380 ? 100 : 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
    marginHorizontal: "auto",
    marginVertical: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
});
