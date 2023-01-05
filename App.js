import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Map from './components/Map';
import Card from './components/Card';
import { gStyle } from './styles/style';
import Cardpanel from './components/Card panel';

export default function App() {
  return (
    <View style={gStyle.container}>
      <Map />
      <Cardpanel />
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}