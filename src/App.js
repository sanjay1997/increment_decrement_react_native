import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { configureStore } from "./store/configureStore";


const App = () => {
  return (
    <Provider store={configureStore}>
      <Counter />
    </Provider>
  );
};

export default App;
