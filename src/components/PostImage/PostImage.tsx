import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {PostImageType} from '../../types';
const PostImage: FC<PostImageType> = ({url}) => {
  return <Image source={{uri: url}} style={styles.img} />;
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
