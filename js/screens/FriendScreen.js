import React, { Component } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';

export default class FriendScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const friend = navigation.getParam('friend');
    return {
      title: `${friend.name.first} ${friend.name.last}`
    };
  };

  render() {
    const friend = this.props.navigation.getParam('friend');
    return (
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.container}
      >
        <Image style={styles.image} source={{ uri: friend.picture.large }} />
        <Text>{friend.name.first}</Text>
      </ScrollView>
    );
  }
}

const width = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  scrollview: {
    backgroundColor: '#fff'
  },
  image: {
    width: width,
    height: width,
    marginBottom: 20
  }
});
