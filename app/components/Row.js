import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class Row extends Component {
  render() {
    const {title, handlePress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => handlePress('LessonScreen', this.props)}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 16,
    color: "#4d4d4d"
  }
})