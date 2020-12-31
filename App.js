import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Game  from './game';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Game />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
