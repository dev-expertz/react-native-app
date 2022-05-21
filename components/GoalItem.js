import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onRemove.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#fff",
  },
});
