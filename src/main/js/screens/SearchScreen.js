import React from "react";
import { Text, View, Button, Alert, StyleSheet, Picker, ScrollView, TouchableHighlight } from "react-native";

const country = [
  {
    label: "アメリカ",
    value: "アメリカ"
  },
  {
    label: "日本",
    value: "日本"
  }
];

const type = [
  {
    label: "カフェ",
    value: "カフェ"
  },
  {
    label: "和食",
    value: "和食"
  },
  {
    label: "中華",
    value: "中華"
  },
  {
    label: "洋食",
    value: "洋食"
  }
];

const prefectures = [
  {
    label: "北海道",
    value: "北海道"
  },
  {
    label: "東京",
    value: "東京"
  },
  {
    label: "大阪",
    value: "大阪"
  }
];

const prefectures_us = [
  {
    label: "フロリダ州",
    value: "フロリダ州"
  },
  {
    label: "コロラド州",
    value: "コロラド州"
  },
  {
    label: "ハワイ州",
    value: "ハワイ州"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  submit: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginLeft :50,
    marginRight:50
  },
  textView: {
    backgroundColor: "#000",
    alignItems: "center",
    padding: 10
  },
  textItem: {
    color: "#fff"
  },
  pickerItem: {
    marginLeft :100,
    marginRight:100
  }
});

class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "中華",
      country: "日本",
      prefectures: "東京"
    };
  }

  renderSearchPicker() {
    if( this.state.country == "アメリカ" )
      return (
        <View style={styles.pickerItem}>
          <Picker
            style={{ height: 140}} itemStyle={{height: 140}}
            selectedValue={this.state.prefectures_us}
            onValueChange={itemValue => this.setState({ prefectures: itemValue })} >
            { prefectures_us.map((i, index) => ( 
              <Picker.Item key={index} label={i.label} value={i.value} /> ))}
          </Picker>
        </View>
      );
    else
      return (
        <View style={styles.pickerItem}>
          <Picker
            style={{ height: 140}} itemStyle={{height: 140}}
            selectedValue={this.state.prefectures}
            onValueChange={itemValue => this.setState({ prefectures: itemValue })} >
            { prefectures.map((i, index) => ( 
              <Picker.Item key={index} label={i.label} value={i.value} /> ))}
          </Picker>
        </View>
      );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.textView}>
            <Text style={styles.textItem}>国の選択</Text>
          </View>

          <View style={styles.pickerItem}>
            <Picker
              style={{ height: 140}} itemStyle={{height: 140}}
              selectedValue={this.state.country}
              onValueChange={itemValue => this.setState({ country: itemValue })} >
              { country.map((i, index) => ( 
                <Picker.Item key={index} label={i.label} value={i.value} /> ))}
            </Picker>
          </View>

          <View style={styles.textView}>
            <Text style={styles.textItem}>地域の選択</Text>
          </View>
          { this.renderSearchPicker() }

          <View style={styles.textView}>
            <Text style={styles.textItem}>ジャンルの選択</Text>
          </View>

          <View style={styles.pickerItem}>
            <Picker
              style={{ height: 140}} itemStyle={{height: 140}}
              selectedValue={this.state.type}
              onValueChange={itemValue => this.setState({ type: itemValue })} >
              { type.map((i, index) => ( 
                <Picker.Item key={index} label={i.label} value={i.value} /> ))}
            </Picker>
          </View>

          <TouchableHighlight style={styles.submit}>
            <Button
              title="検索"
              onPress={() => this.props.navigation.navigate("Home")}
              color="black" />
          </TouchableHighlight>

          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ marginBottom: 10 }}>検索条件</Text>
            <Text>{this.state.country}</Text>
            <Text>{this.state.prefectures}</Text>
            <Text>{this.state.type}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

export default SearchScreen;
