import React from 'react';
import {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';

const {width, height} = Dimensions.get('window');

type Props = {};
export default class AboutScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgImageWrapper}>
          <Image
            source={require('../assets/m.png')}
            style={styles.bgImage}
          />
        </View>
        <Text style={styles.welcome}>
          Welcome to Marvel Heroes, a React Native example.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 18,
    marginTop: 320,
    textAlign: 'center',
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: width,
    height: height,
  },
});
