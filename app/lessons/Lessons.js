import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LessonRow from "./LessonRow";

class Lessons extends Component {
  constructor(props){
    super(props);
    state = {
      lessons: [
        {
          id: '1',
          title: 'Lesson1'
        },
        {
          id: '2',
          title: 'Lesson2'
        },
        {
          id: '3',
          title: 'Lesson3'
        },
        {
          id: '4',
          title: 'Lesson4'
        }
      ]
    }
  }

  render() {
    const lessonRows = (
      this.state.lessons.map((lesson) => {
        <LessonsRow
          lesson
          id={lesson.id}
        />
      })
    )
    return (
      <View>
        <Text>
          {lessonRows}
        </Text>
      </View>
    );
  }
}

export default Lessons;