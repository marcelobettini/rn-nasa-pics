import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.title}>APOD </Text>
        Astronomy Picture of the Day
      </Text>
      <Image
        style={styles.logo}
        source={require('../../assets/nasa_logo.png')}
        alt="Nasa logo"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  logo: {
    height: 50,
    width: 50,
  },
});
