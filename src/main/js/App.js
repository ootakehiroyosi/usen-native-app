import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import SearchScreen from "./screens/SearchScreen";
import UserScreen from "./screens/UserScreen";
import Hello from "./screens/Hello";

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
      headerTitle: "Switch test"
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      headerTitle: "Picker sample"
    }
  },
  User: {
    screen: UserScreen,
    navigationOptions: {
      headerTitle: "no content"
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
