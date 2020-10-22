import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import {base} from './styles/base';
import {app} from './styles/app';

export default function App() {
  return (
    <View style={app.container}>
      <Text style={app.text}>Not a minimalistic app</Text>
      <StatusBar style="auto" />
    </View>
  );
}