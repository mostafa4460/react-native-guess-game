import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

let min = 1,
  max = 100;

const GameScreen = ({ userNumber, setGameOver, setNumGuesses }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [guess, setGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuessHandler = (direction) => {
    const lowerLie = direction === "lower" && guess < userNumber,
      higherLie = direction === "greater" && guess > userNumber;
    if (lowerLie || higherLie) {
      return Alert.alert("Lies!!!", "You cannot cheat...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
    }

    if (direction === "lower") {
      max = guess;
    } else {
      min = guess + 1;
    }
    const newRandomNum = generateRandomBetween(min, max, guess);
    setGuess(newRandomNum);
    setGuessRounds((prevState) => [newRandomNum, ...prevState]);
  };

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  useEffect(() => {
    if (guess === userNumber) {
      setNumGuesses(guessRounds.length);
      setGameOver(true);
    }
  }, [guess, userNumber, setGameOver]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRounds.length - index}
              guess={item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 42,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
