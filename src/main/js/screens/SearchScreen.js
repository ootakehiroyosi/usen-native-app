import React from "react";
import { Text, View, Button, StyleSheet, Picker } from "react-native";

const programmingLanguages = [
  {
    label: "TEXT_01",
    value: "Hello"
  },
  {
    label: "TEXT_02",
    value: "React"
  },
  {
    label: "TEXT_03",
    value: "Native"
  }
];

const styles = StyleSheet.create({
  submit: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  }
});

const SearchScreen = props => (
  <View>
    <View style={{ alignItems: "center" }}>
      <Button
        style={styles.submit}
        onPress={() => props.navigation.navigate("User")}
        title="Next"
      />
    </View>
    <Picker>
      {programmingLanguages.map((i, index) => (
        <Picker.Item key={index} label={i.label} value={i.value} />
      ))}
    </Picker>
  </View>
);

export default SearchScreen;
