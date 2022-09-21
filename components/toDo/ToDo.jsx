import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Output from "./Output";
import Header from "./Header";

export default function ToDo() {
  const [taskVal, setTaskVal] = useState("");
  const [taskList, setTaskList] = useState([
    {
      id: "1",
      task: "Feed The Cat",
      isChecked: true,
      isEditable: false,
    },
    {
      id: "2",
      task: "Walk The Dog",
      isChecked: true,
      isEditable: false,
    },
    {
      id: "3",
      task: "Do Laundry",
      isChecked: false,
      isEditable: false,
    },
    {
      id: "4",
      task: "Complete the ToDo App",
      isChecked: false,
      isEditable: false,
    },
  ]);
  return (
    <View style={styles.toDo}>
      <Header taskList={taskList} />
      <Input
        style={styles.input}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <Output taskList={taskList} setTaskList={setTaskList} />
    </View>
  );
}

const styles = StyleSheet.create({
  toDo: {
    width: "100%",
    height: "100%",
    // backgroundColor: "green",
    textAlign: "center",
  },
  input: {
    width: "100%",
  },
});
