import React from "react";
import { Video } from "expo";
import { Text, View } from "react-native";
import VideoPlayer from "@expo/videoplayer";
import ENV from "../env";

const ShopScreen = () => (
  <View>
    <VideoPlayer
      videoProps={{
        shouldPlay: false,
        resizeMode: Video.RESIZE_MODE_COVER,
        source: {
          uri: ENV.SAMPLE_VIDEO_URL
        },
        isMuted: false
      }}
      playFromPositionMillis={0}
    />

    <Text>○○△△店</Text>
    <Text>Sinjuku Station 5 min</Text>
    <View style={{ borderBottomColor: "black", borderBottomWidth: 1 }} />
    <Text style={{ fontWeight: "bold" }}>基本情報</Text>
    <Text>
      ................................................................
    </Text>
  </View>
);

export default ShopScreen;
