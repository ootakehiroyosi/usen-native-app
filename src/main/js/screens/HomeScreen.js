import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from "react-native";

const pic = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ddd"
  },
  movie_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  movie_size: { aspectRatio: 3 / 2 }
});

const HomeScreen = props => (
  <View>
    <View style={styles.header}>
      <Text>=</Text>
      <Button
        onPress={() => props.navigation.navigate("Next")}
        title="de Live"
      />
      <Text>◯</Text>
    </View>

    <View>
      <ScrollView style={{ height: height - 120 }}>
        <View>
          <Image source={pic} style={{ height: 200 }} />
        </View>

        <Text style={styles.title}>Live配信中</Text>

        <View style={styles.movie_wrapper}>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>ライブ1</Text>
          </View>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>ライブ2</Text>
          </View>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>ライブ3</Text>
          </View>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>ライブ4</Text>
          </View>
        </View>

        <Text style={styles.title}>おすすめ</Text>

        <View style={styles.movie_wrapper}>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>動画2</Text>
          </View>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>動画2</Text>
          </View>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>動画3</Text>
          </View>
          <View style={{ width: "45%" }}>
            <Image source={pic} style={styles.movie_size} />
            <Text>動画4</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);

export default HomeScreen;
