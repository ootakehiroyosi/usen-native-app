import React from "react";
import { View, Button, Alert, TextInput, StyleSheet, Text } from "react-native";

class form extends React.Component {
  constructor() {
    super();
  }

  tap() {
    Alert.alert(
      "要望を受け付けました",
      "送信",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
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
        <Button onPress={() => this.tap()} title="送信" />
      </View>
    );
  }
}

export default form;
