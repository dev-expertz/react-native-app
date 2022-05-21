import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput
} from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  }
});
