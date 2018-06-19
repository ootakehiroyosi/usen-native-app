import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import formScreen from "./screens/formScreen";

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
  form: {
    screen: formScreen,
    navigationOptions: {
      headerTitle: "form"
    }
  }
});
export default function App() {
  return <RootStack />;
}
