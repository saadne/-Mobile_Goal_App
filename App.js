import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modeVisible, setModeVisible] = useState(false);
  const [goal, setGoal] = useState();
  const [data, setData] = useState([]);

  const onchangeGoal = (text) => {
    setGoal(text);
  };
  const addGoal = () => {
    setData((currentGoals) => [
      ...currentGoals,
      { text: goal, key: Math.random().toString() },
    ]);
    setGoal("");
    setModeVisible(false);
  };
  const onGoalDeleted = (key) => {
    setData((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== key);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add  New Goal"
          color="white"
          onPress={() => setModeVisible(true)}
        />
        <GoalInput
          visible={modeVisible}
          setModeVisible={setModeVisible}
          addGoal={addGoal}
          onchangeGoal={onchangeGoal}
          goal={goal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={data}
            renderItem={(itemData) => {
              return (
                <GoalItem itemData={itemData} onGoalDeleted={onGoalDeleted} />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 2,
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 5,
  },
  goalsContainer: {
    flex: 5,
    marginHorizontal: 20,
    marginTop: 12,
  },
});
