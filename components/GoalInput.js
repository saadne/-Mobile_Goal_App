import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ onchangeGoal, addGoal, goal, visible, setModeVisible }) {
  return (
    <Modal style={styles.styleModel} visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/logo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal Please"
          onChangeText={onchangeGoal}
          value={goal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              color={"white"}
              title="Cancel"
              onPress={() => setModeVisible(false)}
            />
          </View>
          <View style={styles.button}>
            <Button color={"white"} title="Add Goal" onPress={addGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#011575",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    backgroundColor: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  imageStyle: {
    width: "60%",
    height: "30%",
    marginBottom: 16,
  },
});
