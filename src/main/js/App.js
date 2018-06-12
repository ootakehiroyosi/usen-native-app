import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import SampleAuthScreen from "./screens/SampleAuthScreen";

// ルーティング設定
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Next: {
    screen: NextScreen,
    navigationOptions: {
      headerTitle: "Next"
    }
  },
  SampleAuth: {
    screen: SampleAuthScreen,
    navigationOptions: {
      headerTitle: "SampleAuth"
    }
  }
});

export default function App() {
  return <RootStack />;
}
