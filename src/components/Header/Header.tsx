import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>SPACEPICS</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/nasa_logo.png')}
          alt="Nasa logo"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
  },
  logo: {
    height: 50,
    width: 50,
  },
});
