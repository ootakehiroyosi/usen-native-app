import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

const pic = {
  uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10
  }
});

const HomeScreen = props => (
  <View>
    <View style={styles.header}>
      <Text>=</Text>
      <Button
        style={{ height: 30 }}
        onPress={() => props.navigation.navigate("Next")}
        title="de Live"
      />
      <Text>◯</Text>
    </View>
    <View>
      <Image source={pic} style={{ width: 193, height: 110 }} />
    </View>
    <Text style={styles.title}>de Live</Text>
    <TextInput style={{ height: 40 }} placeholder="Type here to translate!" />
  </View>
);

export default HomeScreen;
