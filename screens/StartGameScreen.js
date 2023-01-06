import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import COLORS from "../constants/colors";

const StartGameScreen = ({ setUserNumber }) => {
  const [number, setNumber] = useState("");
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (enteredNum) => {
    setNumber(enteredNum);
  };

  const resetInputHandler = () => setNumber("");

  const confirmInputHandler = () => {
    const parsedNum = parseInt(number);
    const numIsBad = isNaN(parsedNum) || parsedNum < 1 || parsedNum > 99;

    if (numIsBad) {
      Alert.alert("Invalid number", "The number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    } else {
      setUserNumber(parsedNum);
    }
  };

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={number}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.secondary500,
    borderBottomWidth: 2,
    color: COLORS.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
