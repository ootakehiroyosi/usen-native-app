import React from "react";
import { createStackNavigator } from "react-navigation";
import { SafeAreaView } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import SampleAuthScreen from "./screens/SampleAuthScreen";
import SampleLiveScreen from "./screens/SampleLiveScreen";
import SearchScreen from "./screens/SearchScreen";

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
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        headerTitle: "Search",
        headerForceInset: true
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
