import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, Platform } from "react-native";
import LessonRow from "./LessonRow";

class Lessons extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      lessons: [],
      dataSource: ds.cloneWithRows([])
    }
  }

  setSource = (lessons, itemsDatasource, otherState = {}) => {
    this.setState({
      lessons,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState
    })
  }

  componentDidMount(){
    const items = [{
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
    }]

    this.setSource(items, items)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ListView
            enableEmptySections
            style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={({id, ...value}) => {
              return (
                <LessonRow
                  key={id}
                  {...value}
                />
              )
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1
  },
  list: {
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: "#F5F5F5"
  }
})

export default Lessons;