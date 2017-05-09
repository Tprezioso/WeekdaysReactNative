// Import Some code
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// Create component
var DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

// Style Component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

// Export code
module.exports = DayItem;
