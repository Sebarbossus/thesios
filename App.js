import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Navigation from './navigation';
import { Block } from './components';

import {app} from './styles/app';

export default function App() {
  return (
    <Block white>
      <Navigation/>
    </Block>
  );
}