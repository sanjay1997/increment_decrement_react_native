import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from "./actions/counts";

const Counter = () => {
  const data     = useSelector((state) => state.counter);
  const dispatch = useDispatch();

    return (
      <View styles={styles.container}>
        <Text></Text> 
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button title="increment" onPress={() => dispatch(addition())} />

        <Text>{data}</Text>

        <Button title="decrement" onPress={() => dispatch(subtraction())} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Counter;
