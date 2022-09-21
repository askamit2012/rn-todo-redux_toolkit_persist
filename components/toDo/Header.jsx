import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ taskList }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Total: {taskList.length}</Text>
      <Text style={styles.headerText}>
        Completed: {taskList.filter((task) => task.isChecked).length}
      </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  header: {
    backgroundColor: "purple",
    marginTop: 40,
    marginBottom: -40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  headerText: {
    color: "#fff",
  },
});
