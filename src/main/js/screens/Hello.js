import React from "react";
import { View, Button, Alert, TextInput, StyleSheet } from "react-native";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "こんにちは" };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 100, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ hello: text })}
          value={this.state.hello}
        />
        <Button
          title={this.state.hello}
          onPress={this._handlePress.bind(this)}
        />
        <Button
          style={{ height: 30 }}
          onPress={() => this.props.navigation.navigate("Next")}
          title="Next"
        />
      </View>
    );
  }

  _handlePress(e) {
    Alert.alert(this.state.hello);
  }
}

export default Hello;
