import { Video } from "expo";
import React from "react";
import { View, Button } from "react-native";
import VideoPlayer from "@expo/videoplayer";

import ENV from "../env";

export default class SampleAuthScreen extends React.Component {
  constructor() {
    super();
    this.source = {
      uri: ENV.SAMPLE_LIVE_URL
    };
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
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              uri: ENV.SAMPLE_VIDEO_URL
            },
            isMuted: false
          }}
          playFromPositionMillis={0}
        />
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
      </View>
    );
  }
}
