import React, { Component } from "react";
import {
  Animated,
  View,
  Image,
  Button,
  StyleSheet,
  PanResponder
} from "react-native";

import { Constants } from "expo";

const supportedLanguages = [
  {
    key: "es",
    uri:
      "http://cnog.mx/wp-content/uploads/2017/05/Argentina-negocios-Asia-industria-automotriz.jpg"
  },
  {
    key: "ru",
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/200px-Flag_of_Russia.svg.png"
  },
  {
    key: "us",
    uri: "http://lasbanderas.net/wp-content/uploads/Jamaica.png"
  }
];

class AnimationTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      activeIndex: 0
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x
          // dy: this.state.pan.y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {
        const { dx } = gesture;
        Animated.spring(this.state.pan, {
          toValue: 0
        }).start();

        if (dx > 0) {
          if (supportedLanguages.length === this.state.activeIndex + 1) {
            this.setState({
              activeIndex: 0
            });
          } else {
            this.setState({
              activeIndex: this.state.activeIndex + 1
            });
          }
        } else if (this.state.activeIndex === 0) {
          this.setState({
            activeIndex: supportedLanguages.length - 1
          });
        } else {
          this.setState({
            activeIndex: this.state.activeIndex - 1
          });
        }
      }
    });
  }

  renderImage(language, i) {
    if (i === this.state.activeIndex) {
      return <Image style={styles.image} source={{ uri: language.uri }} />;
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          style={{ height: 30 }}
          onPress={() => this.props.navigation.navigate("SwitchTest")}
          title="Next"
        />
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout()]}
        >
          {supportedLanguages.map((des, i) => this.renderImage(des, i))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100
  }
});

export default AnimationTest;
