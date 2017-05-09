// Import some code we need
import React, {Component} from 'react';
import {View, Text, AppRegistry, StyleSheet} from 'react-native';
var DayItem = require('./src/day-item');
var Moment = require('moment');


// Create a react component
var Weekdays = React.createClass({
    render: function() {
      return <View style={styles.container}>
        {this.days()}
      </View>
    },
    // helper function
    days: function() {
      var daysItems = [];
      for (var i = 0; i < 7; i++) {
          var day = Moment().add(i, 'days').format('dddd');
          daysItems.push(
            <DayItem day={day} daysUntil={i} />
          )
        }
        return daysItems
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
