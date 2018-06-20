import React from "react";
import { Video } from "expo";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import VideoPlayer from "@expo/videoplayer";
import ENV from "../env";

const pic = {
	uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 50,
    marginRight: 10
  }
});

const ResultScreen = props => (
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

  	<Text>○○△△店</Text>
  	<Text>Sinjuku Station 5 min</Text>
  	<View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }}/>
  	<Text style={{ fontWeight: 'bold' }}>基本情報</Text>
    <Text>................................................................</Text>

  </View>
);

export default ResultScreen;
