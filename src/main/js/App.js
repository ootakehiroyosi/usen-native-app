import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SwitchTest from "./screens/SwitchTest";
import SearchScreen from "./screens/SearchScreen";
import Hello from "./screens/Hello";
import AnimationTest from "./screens/AnimationTest";

// ルーティング設定
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  SwitchTest: {
    screen: SwitchTest,
    navigationOptions: {
      headerTitle: "Switch test"
    }
  },
  AnimationTest: {
    screen: AnimationTest,
    navigationOptions: {
      headerTitle: "Change IMG Animation"
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerTitle: "Picker sample"
    }
  },
  Hello: {
    screen: Hello,
    navigationOptions: {
      headerTitle: "TEST Input text"
    }
  }
});

export default function App() {
  return <RootStack />;
}
