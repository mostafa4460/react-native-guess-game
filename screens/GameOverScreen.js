import {
  Image,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import COLORS from "../constants/colors";

const GameOverScreen = ({ numGuesses, userNumber, restartGameHandler }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 400) imageSize = 200;
  if (height < 400) imageSize = 100;

  const imageStyles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyles]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{numGuesses}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={restartGameHandler}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
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
