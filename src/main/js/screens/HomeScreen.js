import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Platform
} from "react-native";

const mainVisual = require("../../img/deliveMainvisual.png");

const homeIcon = require("../../img/home.png");
const searchIcon = require("../../img/search.png");
const liveIcon = require("../../img/live.png");
const subscribeIcon = require("../../img/subscribe.png");
const myPageIcon = require("../../img/myPage.png");

const liveImage = require("../../img/liveImageSample.jpg");

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: 50,
    zIndex: 999,
    backgroundColor: "#aaa",
    marginTop: Platform.OS === "android" ? 20 : 0
  },
  footerIcon: {
    height: 30,
    width: 30
  },
  scrollView: {
    marginTop: 50,
    marginBottom: 30
  },
  mainImage: { height: 200, width: "100%" },
  title: {
    padding: 10,
    fontSize: 20,
    letterSpacing: 1.125
  },
  movieWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  movieWidth: { width: "45%" },
  movieTitle: { paddingVertical: 10, paddingHorizontal: 5 },
  movieAspect: { height: 100, width: "100%" },
  footerNavi: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "#aaa"
  }
});

const HomeScreen = props => (
  <View style={styles.wrapper}>
    <View style={styles.header}>
      <Button
        onPress={() => props.navigation.navigate("Next")}
        title="de Live"
      />
    </View>

    <ScrollView style={styles.scrollView}>
      <View>
        <Image source={mainVisual} style={styles.mainImage} />
      </View>

      <Text style={styles.title}>Live配信中</Text>

      <View style={styles.movieWrapper}>
        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>ライブ1</Text>
        </View>

        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>ライブ2</Text>
        </View>

        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>ライブ3</Text>
        </View>

        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>ライブ4</Text>
        </View>
      </View>

      <Text style={styles.title}>おすすめ</Text>

      <View style={styles.movieWrapper}>
        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>動画2</Text>
        </View>

        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>動画2</Text>
        </View>

        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>動画3</Text>
        </View>

        <View style={styles.movieWidth}>
          <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
            <Image source={liveImage} style={styles.movieAspect} />
          </TouchableHighlight>
          <Text style={styles.movieTitle}>動画4</Text>
        </View>
      </View>

      <Button
        style={{ height: 30 }}
        onPress={() => props.navigation.navigate("SampleAuth")}
        title="SampleAuth"
      />
      <Button
        style={{ height: 30 }}
        onPress={() => props.navigation.navigate("SampleLive")}
        title="SampleLive"
      />
    </ScrollView>

    <View style={styles.footerNavi}>
      <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
        <Image source={homeIcon} style={styles.footerIcon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate("Search")}>
        <Image source={searchIcon} style={styles.footerIcon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
        <Image source={liveIcon} style={styles.footerIcon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
        <Image source={subscribeIcon} style={styles.footerIcon} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigation.navigate("Next")}>
        <Image source={myPageIcon} style={styles.footerIcon} />
      </TouchableHighlight>
    </View>
  </View>
);

export default HomeScreen;
