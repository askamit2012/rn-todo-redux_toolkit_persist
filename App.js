import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Counter from "./components/counter/Counter";
import ToDo from "./components/toDo/ToDo";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Counter />
          {/* <ToDo /> */}
        </View>
      </SafeAreaProvider>
    </Provider>
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
