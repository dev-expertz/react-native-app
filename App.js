import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
        ></TextInput>
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>
      {/* <View
        style={{
          height: 300,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "stretch",
          borderWidth: 1
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "green",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
