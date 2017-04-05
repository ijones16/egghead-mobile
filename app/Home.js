import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Lessons from "./screens/Lessons"

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Lessons navigation={this.props.navigation} />
       </View>
    );
  }
}

export default Home;