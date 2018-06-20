import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from "react-native";

const optionIcon = require("../../img/settingIcon.png");
const pic1 = require("../../img/mypageSample1.jpg");
const pic2 = require("../../img/mypageSample2.jpg");

const styles = StyleSheet.create({
  scrollView: { marginTop: 50 },
  userName: { width: 100, fontSize: 26 },
  optionIcon: { width: 30, height: 30 },
  myPageWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  categoryTitle: {
    padding: 10,
    textAlign: "left",
    fontSize: 20,
    letterSpacing: 8 / 9
  },
  categoryWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  categoryWidth: { width: "45%" },
  movieTitle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    letterSpacing: 8 / 9
  },
  movieAspect: { aspectRatio: 16 / 9, height: 100 }
});

const MyPageScreen = props => (
  <View>
    <ScrollView style={styles.scrollView}>
      <Button
        onPress={() => props.navigation.navigate("MyPage")}
        title="my page"
      />

      <View style={styles.myPageWrapper}>
        <View>
          <Text style={styles.userName}>ほげほげ</Text>
        </View>

        <View>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("Setting")}
          >
            <Image source={optionIcon} style={styles.optionIcon} />
          </TouchableHighlight>
        </View>
      </View>

      <Text style={styles.categoryTitle}>予約中のお店</Text>

      <View style={styles.categoryWrapper}>
        <View style={styles.categoryWidth}>
          <Image source={pic1} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>予約中のお店①</Text>
        </View>
        <View style={styles.categoryWidth}>
          <Image source={pic2} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>予約中のお店②</Text>
        </View>
      </View>

      <Text style={styles.categoryTitle}>お気に入り</Text>

      <View style={styles.categoryWrapper}>
        <View style={styles.categoryWidth}>
          <Image source={pic1} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>お気に入り①</Text>
        </View>
        <View style={styles.categoryWidth}>
          <Image source={pic2} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>お気に入り②</Text>
        </View>
      </View>

      <Text style={styles.categoryTitle}>登録チャンネル</Text>

      <View style={styles.categoryWrapper}>
        <View style={styles.categoryWidth}>
          <Image source={pic1} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>登録チャンネル①</Text>
        </View>
        <View style={styles.categoryWidth}>
          <Image source={pic2} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>登録チャンネル②</Text>
        </View>
      </View>

      <Text style={styles.categoryTitle}>履歴</Text>

      <View style={styles.categoryWrapper}>
        <View style={styles.categoryWidth}>
          <Image source={pic1} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>履歴①</Text>
        </View>
        <View style={styles.categoryWidth}>
          <Image source={pic2} style={styles.movieAspect} />
          <Text style={styles.movieTitle}>履歴②</Text>
        </View>
      </View>
    </ScrollView>
  </View>
);

export default MyPageScreen;
