import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ itemData, onGoalDeleted }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onGoalDeleted.bind(this, itemData.item.key)}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  goalText: {
    color: "#011575",
  },
  pressedItem: {
    opacity: 0.2,
  },
});
