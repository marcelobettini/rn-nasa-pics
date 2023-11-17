import {StyleSheet, Text, ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import {PostImageType} from '../../types';
import PostImage from '../PostImage';

const LastFiveDaysImages: FC<{lastFiveImages: PostImageType[]}> = ({
  lastFiveImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Five Photos</Text>
      <ScrollView horizontal disableIntervalMomentum style={styles.content}>
        {lastFiveImages?.map(post => (
          <PostImage {...post} key={`${post.date}-${post.title}`} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastFiveDaysImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {marginBottom: 10},
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    marginVertical: 7,
    color: 'white',
  },
});
