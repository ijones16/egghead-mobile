import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LessonScreen extends Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Chat with ${state.params.content.title}`,
  };

  render() {
     const {content} = this.props.navigation.state.params
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.lessonMetaContainer}>
          <Text style={styles.lessonMeta}>{content.duration}</Text>
          <Text style={styles.lessonMeta}>{content.technology.label} lesson by {content.instructor.full_name} </Text>
        </View>
        <Text style={styles.summary}>{content.summary}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  lessonMetaContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lessonMeta: {
    color: '#4d4d4d'
  },
  summary: {
    fontSize: 16
  }
})

export default LessonScreen;