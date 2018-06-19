import React from "react";
import { createStackNavigator } from "react-navigation";
import { SafeAreaView } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import SampleAuthScreen from "./screens/SampleAuthScreen";
import SampleLiveScreen from "./screens/SampleLiveScreen";
import formScreen from "./screens/formScreen";
import SearchList from "./screens/SearchList";

// ルーティング設定
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Next: {
      screen: NextScreen,
      navigationOptions: {
        header: null
      }
    },
    form: {
      screen: formScreen,
      navigationOptions: {
        headerTitle: "form"
      }
    },
    SearchList: {
      screen: SearchList,
      navigationOptions: {
        headerTitle: "SearchList"
      }
    },
    SampleAuth: {
      screen: SampleAuthScreen,
      navigationOptions: {
        headerTitle: "SampleAuth"
      }
    },
    SampleLive: {
      screen: SampleLiveScreen,
      navigationOptions: {
        headerTitle: "SampleLive"
      }
    }
  },
  {
    cardStyle: {
      shadowColor: "transparent"
    }
  }
);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#aaa" }}>
      <RootStack />
    </SafeAreaView>
  );
}
