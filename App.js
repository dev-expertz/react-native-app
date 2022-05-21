import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(function (currentCourseGoals) {
      return [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}];
    });
  }

  function removeGoalHandler(id) {
    setCourseGoals(function (currentCourseGoals) {
      return currentCourseGoals.filter((f) => {return f.id !== id})
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} text={itemData.item.text} onRemove={removeGoalHandler} />;
          }}
          keyExtractor={(item, index) => { return item.id}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
});
