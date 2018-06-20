import { Video } from "expo";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  Platform
} from "react-native";

import VideoPlayer from "@expo/videoplayer";

import ENV from "../env";

const upPic = require("../../img/up.png");
const rightPic = require("../../img/right.png");
const leftPic = require("../../img/left.png");
const underPic = require("../../img/under.png");
const wcPic = require("../../img/wc.png");

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    height: 30,
    width: 30
  },
  scrollView: {
    backgroundColor: "#000"
  },
  actWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
});

export default class SampleAuthScreen extends React.Component {
  constructor() {
    super();
    this.source = {
      uri: ENV.SAMPLE_LIVE_URL
    };
    this.state = { up: "上" };
  }

  stop() {
    this.playbackInstance.stopAsync();
  }
  start() {
    this.playbackInstance.loadAsync(this.source, { shouldPlay: true });
  }
  reload() {
    this.playbackInstance.stopAsync();
    this.playbackInstance.unloadAsync();
    this.playbackInstance.loadAsync(this.source, { shouldPlay: true });
  }
  tap(act) {
    Alert.alert(
      "action",
      `${act}を押しました`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View>
        <View>
          <Video
            source={this.source}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            style={{ width: 400, height: 225 }}
            ref={component => {
              this.playbackInstance = component;
            }}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <Button
            style={{ height: 30 }}
            onPress={() => this.stop()}
            title="Stop"
          />
          <Button
            style={{ height: 30 }}
            onPress={() => this.start()}
            title="Start"
          />
          <Button
            style={{ height: 30 }}
            onPress={() => this.reload()}
            title="Reload"
          />

          <View style={styles.actWrapper}>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => this.tap("up")}
            >
              <Image style={styles.button} source={upPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => this.tap("right")}
            >
              <Image style={styles.button} source={rightPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => this.tap("left")}
            >
              <Image style={styles.button} source={leftPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => this.tap("under")}
            >
              <Image style={styles.button} source={underPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => this.tap("wc")}
            >
              <Image style={styles.button} source={wcPic} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
