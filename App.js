import { Image, StatusBar, StyleSheet, View } from 'react-native';

import React from 'react';
import Routes from './src/routes';
import background from './src/assets/background.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
