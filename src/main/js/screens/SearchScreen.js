import React from "react";
import { Text, View, Button, Alert, StyleSheet, Picker } from "react-native";

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

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "こんにちは",
      job: ""
    };
  }

  render() {
    return (
      <View>
        <View style={{ alignItems: "center" }}>
          <Button
            style={styles.submit}
            onPress={() => this.props.navigation.navigate("Home")}
            title="Back home"
          />
          <Button
            title={this.state.job}
            onPress={this._handlePress.bind(this)}
          />
        </View>
        <Picker
          selectedValue={this.state.job}
          onValueChange={itemValue => this.setState({ job: itemValue })}
        >
          {programmingLanguages.map((i, index) => (
            <Picker.Item key={index} label={i.label} value={i.value} />
          ))}
        </Picker>
      </View>
    );
  }

  _handlePress(e) {
    Alert.alert(this.state.job);
  }
}

export default SearchScreen;
