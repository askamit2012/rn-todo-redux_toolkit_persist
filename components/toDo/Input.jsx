import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./toDo";

export default function Input() {
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  let dispatch = useDispatch();

  // ***************** Alert Function **************
  const createTwoButtonAlert = () => {
    Alert.alert("Warning", "Task Cannot Be Empty!", [
      { text: "OK", onPress: () => "" },
    ]);
  };
  function showTaskInputHandler() {
    setShowTaskInput((prev) => !prev);
  }
  function taskInputHandler(text) {
    setTaskInput(text);
  }
  function addTaskBtnHandler() {
    if (!taskInput) {
      createTwoButtonAlert();
    } else {
      setShowTaskInput((prev) => !prev);
      const newTask = {
        id: new Date().getMilliseconds().toString() + Math.random() * 1000000,
        task: taskInput,
        isChecked: false,
        isEditable: false,
      };
      dispatch(addTask(newTask));
      setTaskInput("");
    }
  }

  return (
    <View style={styles.input}>
      {!showTaskInput && (
        <Pressable style={styles.plusBtnView} onPress={showTaskInputHandler}>
          <Text style={styles.plusBtn}>+</Text>
        </Pressable>
      )}
      {showTaskInput && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={taskInput}
            onChangeText={(text) => taskInputHandler(text)}
          />
          <Pressable style={styles.btn} onPress={addTaskBtnHandler}>
            <Text style={styles.btnText}>Add Task</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 50,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  plusBtnView: {
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "solid",
    width: "10%",
    margin: "auto",
    backgroundColor: "orange",
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  plusBtn: {
    fontSize: 30,
    margin: "auto",
  },
  inputContainer: {
    // backgroundColor: "red",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "green",
    borderWidth: 1,
    borderStyle: "solid",
    color: "green",
    width: "90%",
  },
  btn: {
    width: "20%",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
  },
  btnText: {
    color: "#fff",
  },
});
