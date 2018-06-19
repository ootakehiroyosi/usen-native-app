import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
  StyleSheet
} from "native-base";

class SearchList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail
                square
                Image
                source={{
                  uri:
                    "https://tblg.k-img.com/restaurant/images/Rvw/61602/640x640_rect_61602224.jpg"
                }}
                style={{ width: 100, height: 100 }}
              />
              <Body>
                <Text style={{ fontSize: 25 }}>店の名前表示</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail
                square
                Image
                source={{
                  uri:
                    "https://tblg.k-img.com/restaurant/images/Rvw/61602/640x640_rect_61602224.jpg"
                }}
                style={{ width: 100, height: 100 }}
              />
              <Body>
                <Text style={{ fontSize: 25 }}>店の名前表示</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail
                square
                Image
                source={{
                  uri:
                    "https://tblg.k-img.com/restaurant/images/Rvw/61602/640x640_rect_61602224.jpg"
                }}
                style={{ width: 100, height: 100 }}
              />
              <Body>
                <Text style={{ fontSize: 25 }}>店の名前表示</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail
                square
                Image
                source={{
                  uri:
                    "https://tblg.k-img.com/restaurant/images/Rvw/61602/640x640_rect_61602224.jpg"
                }}
                style={{ width: 100, height: 100 }}
              />
              <Body>
                <Text style={{ fontSize: 25 }}>店の名前表示</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Thumbnail
                square
                Image
                source={{
                  uri:
                    "https://tblg.k-img.com/restaurant/images/Rvw/61602/640x640_rect_61602224.jpg"
                }}
                style={{ width: 100, height: 100 }}
              />
              <Body>
                <Text style={{ fontSize: 25 }}>店の名前表示</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
export default SearchList;
