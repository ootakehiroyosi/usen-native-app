import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Platform
} from "react-native";

const pic = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: 50,
    zIndex: 999,
    backgroundColor: "#aaa",
    marginTop: Platform.OS === "android" ? 20 : 0
  },
  scrollView: {
    marginTop: 50,
    marginBottom: 30
  },
  mainImage: { height: 200 },
  title: {
    padding: 10,
    textAlign: "center",
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
  movieAspect: { aspectRatio: 16 / 9 },
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
      <Text>=</Text>
      <Button
        onPress={() => props.navigation.navigate("Next")}
        title="de Live"
      />
      <Text>検索</Text>
    </View>

    <ScrollView style={styles.scrollView}>
      <View>
        <Image source={pic} style={styles.mainImage} />
      </View>

      <Text style={styles.title}>Live配信中</Text>

      <View style={styles.movieWrapper}>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>ライブ1</Text>
        </View>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>ライブ2</Text>
        </View>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>ライブ3</Text>
        </View>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>ライブ4</Text>
        </View>
      </View>

      <Text style={styles.title}>おすすめ</Text>

      <View style={styles.movieWrapper}>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>動画2</Text>
        </View>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>動画2</Text>
        </View>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>動画3</Text>
        </View>
        <View style={styles.movieWidth}>
          <Image source={pic} style={styles.movieAspect} />
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
      <Button title="HOM" onPress={() => props.navigation.navigate("Next")} />
      <Button title="SEA" onPress={() => props.navigation.navigate("Next")} />
      <Button title="000" onPress={() => props.navigation.navigate("Next")} />
      <Button title="FAV" onPress={() => props.navigation.navigate("Next")} />
      <Button title="MAY" onPress={() => props.navigation.navigate("Next")} />
    </View>
  </View>
);

export default HomeScreen;
