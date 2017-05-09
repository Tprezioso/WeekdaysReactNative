// Import some code we need
import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';
var DayItem = require('./src/day-item');

var DAYS = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Create a react component
var Weekdays = React.createClass({
    render: function() {
      return <View style={styles.container}>
        <Text>
          Days of the week:
        </Text>
        {this.days()}
      </View>
    },
    // helper function
    days: function() {
        return DAYS.map(function(day) {
        //called 7 times for each day of the week
          return <DayItem day={day}/ >
      });
    }
});

// Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // y axis
    alignItems: 'center' // x axis
  }
});

// Show the react component on the screnn
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
