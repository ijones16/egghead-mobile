import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LessonRow extends Component {
  render() {
    const {lesson} = this.props;
    return (
      <View>
        <Text>{lesson.title}</Text>
      </View>
    );
  }
}

export default LessonRow;