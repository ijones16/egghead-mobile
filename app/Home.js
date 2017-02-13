import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Lessons from "./lessons/Lessons"

class Home extends Component {
  render() {
    return (
      <View>
        <Lessons />
       </View>
    );
  }
}

export default Home;