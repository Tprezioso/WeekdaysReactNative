// Import Some code
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// Create component
var DayItem = React.createClass({
  render: function() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },

  // How to style in react-native
  style: function() {
      return {
        color: this.color(),
        fontWeight: this.fontWeight(),
        fontSize: this.fontSize(),
        lineHeight: this.lineHeight()
      }
  },
  color: function() {
      var opacity = 1 / this.props.daysUntil;
      return 'rgba(0,0,0,'+ opacity +')';
  },
  fontWeight: function() {
    var weight = 7 - this.props.daysUntil;
    var weightString = weight * 100 ;
    return weightString.toString();
  },
  fontSize: function() {
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function() {
    return 70 - 4 * this.props.daysUntil;
  }
});

// Export code
module.exports = DayItem;
