/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './app/Home';
import LessonScreen from './app/screens/LessonScreen';
import Lessons from './app/screens/Lessons';

export default class EggheadMobile extends Component {
  static navigationOptions = {
    title: 'Browse',
  };
  render() {
    return (
      <View style={styles.container}>
        <Lessons navigation={this.props.navigation}/>
      </View>
    );
  }
}

const egghead_mobile = StackNavigator({
  Home: {screen: EggheadMobile},
  LessonScreen: {screen: LessonScreen}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('egghead_mobile', () => egghead_mobile);
