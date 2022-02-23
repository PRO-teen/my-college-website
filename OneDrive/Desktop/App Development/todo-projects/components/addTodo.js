import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const addTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        style={styles.button}
        onPress={() => submitHandler(text)}
        title="Add"
        color="coral"
      />
    </View>
  );
};

export default addTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
