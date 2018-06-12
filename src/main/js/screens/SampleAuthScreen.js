import Expo from "expo";
import React from "react";
import * as firebase from "firebase";
import { View, Text, Button } from "react-native";

import ENV from "../env";

async function signInWithGoogleAsync() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: ENV.ANDROID_CLIENT_ID,
      iosClientId: ENV.IOS_CLIENT_ID,
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        result.accessToken
      );
      return firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(userCredential => userCredential.additionalUserInfo.profile.name)
        .catch(error => {
          // Handle Errors here.
          console.log(error.message);
          return "error";
        });
    }
  } catch (e) {
    return "";
  }
  return "";
}

export default class SampleAuthScreen extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date(), name: "Guest" };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  loginWithGoogle() {
    signInWithGoogleAsync().then(name => {
      this.setState({
        name: name.toString()
      });
    });
  }

  render() {
    return (
      <View>
        <Text>Hello, {this.state.name}</Text>
        <Text>Time, {this.state.date.toString()}</Text>
        <Button
          onPress={() => this.loginWithGoogle()}
          title="Button"
          color="#841584"
        />
      </View>
    );
  }
}
