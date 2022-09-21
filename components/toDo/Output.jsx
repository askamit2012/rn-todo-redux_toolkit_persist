import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, checkTask, editTask, modifyTask } from "./toDo";

export default function Output() {
  let taskList = useSelector((state) => state.toDo.taskList);
  let dispatch = useDispatch();
  const [newTaskVal, setNewTaskVal] = useState("");
  function deleteBtnHandler(index) {
    dispatch(deleteTask(index));
  }
  function cbHandler(index) {
    dispatch(checkTask(index));
  }
  function editBtnHandler(index) {
    dispatch(editTask(index));
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
    dispatch(modifyTask({ index, newTask }));
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
