import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Lessons from "./lessons/Lessons"
import  _Environment  from  "../environment"
import ApiUtils from "./apiUtils/ApiUtils"
console.log("url: ", _Environment.production.MOBILE_APP_EGGHEAD_BASE_URL)
const headers = new Headers({
  "Authorization": `Bearer ${_Environment.production.MOBILE_APP_EGGHEAD_JWT}`,
  "Content-Type": "application/json"
}) 



class Home extends Component {
  componentDidMount(){
    this.loadLessons(1);
  }

  loadLessons = (page) => {
    return fetch(`${_Environment.production.MOBILE_APP_EGGHEAD_BASE_URL}/lessons?size=5&page=${page}`, {
        headers
    }).then(ApiUtils.checkStatus)
      .then((res) => {
        res.json().then((lessons) => {
        console.log(lessons)
      })
    })  
  }

  render() {
    return (
      <View>
        <Lessons />
       </View>
    );
  }
}

export default Home;