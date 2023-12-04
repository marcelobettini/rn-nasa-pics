import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PostImageType, StackNavigationParams} from '../../types';
type PostImageNavigationProps = NativeStackNavigationProp<
  StackNavigationParams,
  '+ Info'
>;

const TodayImage: FC<PostImageType> = ({
  date,
  title,
  url,
  explanation,
  copyright,
}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  function handleViewPress() {
    navigate('+ Info', {date, title, url, explanation, copyright});
  }
  function handleNavigate() {
    navigate('Date Picker');
  }
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

      <View style={styles.btnContainer}>
        <TouchableHighlight
          style={styles.btn}
          underlayColor={'lightgrey'}
          onPress={handleViewPress}>
          <Text>+ INFO</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor={'lightgrey'}
          onPress={handleNavigate}>
          <Text>DAY PICK</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default TodayImage;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 0.5,
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
  btn: {
    alignSelf: 'flex-end',
    padding: 5,
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
