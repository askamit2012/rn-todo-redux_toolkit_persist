import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import Counter from "./components/counter/Counter";
import ToDo from "./components/toDo/ToDo";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import counterReducer from "./components/counter/counterSlice";
import toDoReducer from "./components/toDo/toDo";

let store = configureStore({
  reducer: {
    // counter: counterReducer,
    toDo: toDoReducer,
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <View style={styles.container}>
          {/* <Counter /> */}
          <ToDo />
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "red",
    position: "relative",
  },
});
