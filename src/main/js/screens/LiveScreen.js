import { Video } from "expo";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";

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
    backgroundColor: "transparent"
  },
  actWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  }
});

export default class LiveScreen extends React.Component {
  static tap(act) {
    Alert.alert("action", `${act}を押しました`, [{ text: "OK" }], {
      cancelable: false
    });
  }

  constructor() {
    super();
    this.source = {
      uri: ENV.SAMPLE_VIDEO_URL
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
              onPress={() => LiveScreen.tap("up")}
            >
              <Image style={styles.button} source={upPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => LiveScreen.tap("right")}
            >
              <Image style={styles.button} source={rightPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => LiveScreen.tap("left")}
            >
              <Image style={styles.button} source={leftPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => LiveScreen.tap("under")}
            >
              <Image style={styles.button} source={underPic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title={this.state.up}
              onPress={() => LiveScreen.tap("wc")}
            >
              <Image style={styles.button} source={wcPic} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
