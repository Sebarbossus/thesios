import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import { theme } from "../constants";

export default class Card extends Component {
  render() {
    const { text, pressAction, navigation } = this.props;
    return(
      <TouchableOpacity onPress={() => {navigation.navigate(pressAction)}} style={styles.card}>
        <View style={styles.inner}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    width: '50%',
    height: '40%',
    padding: 5,
    borderRadius: theme.sizes.radius
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
