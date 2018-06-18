import React from "react";
import {
  Switch,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet
} from "react-native";
import { Constants } from "expo";

class SwitchTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switching: false
    };
  }

  switchValue = value => {
    this.setState({ switching: value });
    const switchText = value ? "ON" : "OFF";
    alert(`今の状態はスイッチ${switchText}です`);
  };

  render() {
    const switching = this.state.switching;
    return (
      <View>
        <Switch onValueChange={this.switchValue} value={switching} />
        <Button
          style={{ height: 30 }}
          onPress={() => this.props.navigation.navigate("Search")}
          title="Next"
        />
      </View>
    );
  }
}

export default SwitchTest;
