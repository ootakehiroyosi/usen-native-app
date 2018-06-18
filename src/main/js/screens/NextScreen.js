import React from "react";
import { Text, View, Button } from "react-native";

const NextScreen = props => (
  <View>
    <Text>Next!!</Text>
    <Button
      onPress={() => props.navigation.navigate("MyPage")}
      title="my page"
    />
  </View>
);

export default NextScreen;
