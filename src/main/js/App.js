import React from "react";
import { createStackNavigator } from "react-navigation";
import { SafeAreaView } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import NextScreen from "./screens/NextScreen";
import SampleAuthScreen from "./screens/SampleAuthScreen";
import SampleLiveScreen from "./screens/SampleLiveScreen";
import ShopScreen from "./screens/ShopScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
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
        headerTitle: "Next"
      }
    },
    Result: {
      screen: ShopScreen,
      navigationOptions: {
        headerTitle: "Detail",
        headerForceInset: true
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
    },
    SearchResult: {
      screen: SearchResultScreen,
      navigationOptions: {
        headerTitle: "SearchResult",
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
