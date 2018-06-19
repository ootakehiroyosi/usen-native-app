import React from "react";
import { View, Button, Alert, TextInput, StyleSheet, Text } from "react-native";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "送信完了" };
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: 20
          }}
        >
          お問い合わせ
        </Text>
        <TextInput
          placeholder="店名入力"
          style={{
            height: 60,
            fontSize: 24,
            marginLeft: 20,
            marginRight: 20,
            borderColor: "#727171",
            borderWidth: 1,
            marginTop: 20
          }}
        />
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="要望入力"
          style={{
            height: 150,
            fontSize: 24,
            marginLeft: 20,
            marginRight: 20,
            borderColor: "#727171",
            borderWidth: 1,
            marginTop: 20
          }}
        />
        <Button
          title={this.state.hello}
          onPress={this._handlePress.bind(this)}
          title="送信"
        />
      </View>
    );
  }
  _handlePress(e) {
    Alert.alert(this.state.hello);
  }
}
export default Hello;
