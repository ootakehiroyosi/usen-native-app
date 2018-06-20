import React from "react";
import { createStackNavigator } from "react-navigation";
import { SafeAreaView } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import MyPageScreen from "./screens/MyPageScreen";
import SampleAuthScreen from "./screens/SampleAuthScreen";
import SampleLiveScreen from "./screens/SampleLiveScreen";
import SearchScreen from "./screens/SearchScreen";
import LiveScreen from "./screens/LiveScreen";

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
    MyPage: {
      screen: MyPageScreen,
      navigationOptions: {
        headerTitle: "MyPage",
        headerForceInset: true
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        headerTitle: "Search",
        headerForceInset: true
      }
    },
    Live: {
      screen: LiveScreen,
      navigationOptions: {
        headerTitle: "Live"
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
