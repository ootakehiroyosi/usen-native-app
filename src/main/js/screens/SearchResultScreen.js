import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from "react-native";

const pic = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    marginBottom: 10,
    height: 100
  },
  sectionImage: {
    height: "100%",
    aspectRatio: 16 / 9
  },
  textdata: {
    flex: 1
  },
  textstyle: {
    padding: 5
  }
});

const SearchResultScreen = props => (
  <View>
    <TextInput style={{ height: 40 }} placeholder="search" />

    <View>
      <Text>検索結果一覧</Text>

      <View style={styles.section}>
        <TouchableHighlight onPress={() => props.navigation.navigate("Result")}>
          <Image source={pic} style={styles.sectionImage} />
        </TouchableHighlight>
        <View style={styles.textdata}>
          <Text style={styles.textstyle}>町の有名なお店。</Text>
          <Text style={styles.textstyle}>
            こだわりー 手作り食材からすべて作り上げています。
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableHighlight onPress={() => props.navigation.navigate("Result")}>
          <Image source={pic} style={styles.sectionImage} />
        </TouchableHighlight>
        <View style={styles.textdata}>
          <Text style={styles.textstyle}>全席完全個室。</Text>
          <Text style={styles.textstyle}>ミーティング用にピッタリ。</Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableHighlight onPress={() => props.navigation.navigate("Result")}>
          <Image source={pic} style={styles.sectionImage} />
        </TouchableHighlight>
        <View style={styles.textdata}>
          <Text style={styles.textstyle}>駅からすぐ。</Text>
          <Text style={styles.textstyle}>
            こだわりー 手作り食材からすべて作り上げています。
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableHighlight onPress={() => props.navigation.navigate("Result")}>
          <Image source={pic} style={styles.sectionImage} />
        </TouchableHighlight>
        <View style={styles.textdata}>
          <Text style={styles.textstyle}>ALL DAY COFFEE。</Text>
          <Text style={styles.textstyle}>コーヒー種類豊富。</Text>
        </View>
      </View>
    </View>
  </View>
);

export default SearchResultScreen;
