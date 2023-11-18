import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Header from '../Header';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationParams} from '../../types/index';

const PicInfo = () => {
  const {
    params: {url, title, date, explanation, copyright},
  } =
    useRoute<
      NativeStackScreenProps<StackNavigationParams, '+ Info'>['route']
    >();
  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        {!url ? (
          <View style={styles.imgLoader}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <Image source={{uri: url}} style={styles.img} />
        )}
        <Text style={styles.ttl}>{title}</Text>
        <ScrollView>
          <Text style={styles.explanation}>{explanation}</Text>
          <Text>{copyright}</Text>
          <Text>{date}</Text>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  img: {
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgLoader: {height: 300, justifyContent: 'center'},
  ttl: {
    fontSize: 22,
  },
  explanation: {
    marginVertical: 10,
    fontSize: 16,
  },
});
export default PicInfo;
