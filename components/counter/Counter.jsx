import { Text, View, StyleSheet, Pressable } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { decrement, increment } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  let count = useSelector((store) => store.counter.value);
  let dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", marginTop: 50 }}>The Best Counter</Text>
      <View style={styles.counter}>
        <Pressable style={styles.btn} onPress={() => dispatch(decrement())}>
          <Text style={{ color: "#fff" }}>-</Text>
        </Pressable>
        <Text style={styles.count}>{count}</Text>
        <Pressable style={styles.btn} onPress={() => dispatch(increment())}>
          <Text style={{ color: "#fff" }}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    color: "blue",
    backgroundColor: "red",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  counter: {
    backgroundColor: "purple",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "green",
    margin: 5,
    padding: 10,
    fontSize: 36,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  count: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: "orange",
    fontSize: 36,
    width: "auto",
    display: "flex",
  },
});
