import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

export default function Output({ taskList, setTaskList }) {
  const [newTaskVal, setNewTaskVal] = useState("");
  function deleteBtnHandler(index) {
    let myList = [...taskList];
    myList.splice(index, 1);
    setTaskList(myList);
  }
  function cbHandler(index) {
    let myList = [...taskList];
    myList[index].isChecked = !myList[index].isChecked;
    setTaskList(myList);
  }
  function editBtnHandler(index) {
    let myList = [...taskList];
    myList[index].isEditable = !myList[index].isEditable;
    setTaskList(myList);
  }
  function newTaskInputHandler(text) {
    setNewTaskVal(text);
  }
  function modifyBtnHandler(index) {
    let newTask = {
      id: new Date().getMilliseconds() + Math.random() * 1000000,
      task: newTaskVal,
      isChecked: false,
      isEditable: false,
    };
    let myList = [...taskList];
    myList.splice(index, 1, newTask);
    setTaskList(myList);
  }
  return (
    <View>
      {taskList.map((task, index) => (
        <View key={task.id}>
          {task.isChecked ? (
            <View key={task.id} style={[styles.singleTask, styles.checkedTask]}>
              <Checkbox
                style={styles.cb}
                value={task.isChecked}
                onValueChange={() => cbHandler(index)}
              />
              <Text style={styles.text}>{task.task}</Text>
              <Pressable
                style={styles.btn}
                onPress={() => deleteBtnHandler(index)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
            </View>
          ) : task.isEditable ? (
            <View
              key={task.id}
              style={[styles.singleTask, styles.editableTask]}
            >
              <View>
                <TextInput
                  placeholder={task.task}
                  onChangeText={newTaskInputHandler}
                />
              </View>
              <View>
                <Pressable
                  style={styles.btn}
                  onPress={() => modifyBtnHandler(index)}
                >
                  <Text style={styles.btnText}>Modify</Text>
                </Pressable>
                <Pressable
                  style={styles.btn}
                  onPress={() => deleteBtnHandler(index)}
                >
                  <Text style={styles.btnText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          ) : (
            <View key={task.id} style={styles.singleTask}>
              <Checkbox
                style={styles.cb}
                value={task.isChecked}
                onValueChange={() => cbHandler(index)}
              />
              <Text style={styles.text}>{task.task}</Text>
              <Pressable
                style={styles.btn}
                onPress={() => editBtnHandler(index)}
              >
                <Text style={styles.btnText}>Edit</Text>
              </Pressable>
              <Pressable
                style={styles.btn}
                onPress={() => deleteBtnHandler(index)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  output: {
    display: "flex",
  },
  singleTask: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EEEFFF",
    marginVertical: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  checkedTask: {
    backgroundColor: "green",
    textDecorationLine: "line-through",
  },
  editableTask: {
    backgroundColor: "blue",
  },
  cb: {
    marginLeft: 10,
  },
  text: {
    flex: 5,
    marginLeft: 10,
  },
  btn: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "orange",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  },
});
