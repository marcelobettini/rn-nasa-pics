import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {FC} from 'react';
import {PostImageType} from '../../types';

const TodayImage: FC<PostImageType> = ({date, title, url}) => {
  return (
    <View style={styles.container}>
      {!url ? (
        <View style={styles.imgLoader}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <Image source={{uri: url}} style={styles.img} />
      )}
      <Text style={styles.ttl}>{title}</Text>
      <Text style={styles.subTtl}>{date}</Text>
      <Button title="+ INFO" />
    </View>
  );
};

export default TodayImage;

const styles = StyleSheet.create({
  container: {
    height: '58%',
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  img: {
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgLoader: {height: 300, justifyContent: 'center'},
  ttl: {
    fontSize: 24,
  },
  subTtl: {
    fontSize: 18,
    marginBottom: 10,
  },
});
