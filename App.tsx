import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, Platform} from 'react-native';

import Router from './src/routes/Router';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
