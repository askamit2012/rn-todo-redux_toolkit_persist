import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Output from "./Output";
import Header from "./Header";

export default function ToDo() {
  return (
    <View style={styles.toDo}>
      <Header />
      <Input style={styles.input} />
      <Output />
      <Text style={{ color: "#FFF" }}>Let's ToDo using Redux Toolkit</Text>
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
