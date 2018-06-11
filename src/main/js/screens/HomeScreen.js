import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
  // Dimensions
} from "react-native";

const pic = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
};

// const { height } = Dimensions.get("window");

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
    backgroundColor: "#aaa"
  },
  scrollView: {
    marginTop: 50
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
  movieAspect: { aspectRatio: 16 / 9 }
});

const HomeScreen = props => (
  <View style={styles.wrapper}>
    <View style={styles.header}>
      <Text>=</Text>
      <Button
        onPress={() => props.navigation.navigate("Next")}
        title="de Live"
      />
      <Text>◯</Text>
    </View>

    <View>
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
      </ScrollView>
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
  </View>
);

export default HomeScreen;
