import React, {FC} from 'react';
import {TouchableWithoutFeedback, StyleSheet, Image} from 'react-native';
import {PostImageType} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationParams} from '../../types';
type PostImageNavigationProps = NativeStackNavigationProp<
  StackNavigationParams,
  '+ Info'
>;
const PostImage: FC<PostImageType> = ({explanation, title, date, url}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();
  const handlePress = () => {
    navigate('+ Info', {title, date, explanation, url});
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={{uri: url}} style={styles.img} />
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginBottom: 10,
    marginEnd: 10,
  },
});
export default PostImage;
