import React, { Component } from "react";
import { View, Text, StyleSheet, ListView, Platform } from "react-native";
import LessonRow from "../components/Row";
import _Environment from "../../environment";
import ApiUtils from "../apiUtils/ApiUtils";
const headers = new Headers({
  "Authorization": `Bearer ${_Environment.production.MOBILE_APP_EGGHEAD_JWT}`,
  "Content-Type": "application/json"
})


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

  loadLessons = () => {
    return fetch(`${_Environment.production.MOBILE_APP_EGGHEAD_BASE_URL}/lessons?size=10&page=1`, {
        headers
    }).then(ApiUtils.checkStatus)
  }

  componentDidMount(){

    this.loadLessons()
      .then((res) => {
        res.json()
        .then((lessons) => {
          console.log(lessons)
          this.setSource(lessons, lessons)
        })
      }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Lessons</Text>
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
            renderSeparator={(sectionId, rowId) => {
              return <View key={rowId} style={styles.separator}/>
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
  header: {
    fontSize: 24
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