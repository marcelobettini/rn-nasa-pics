import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import getData from '../../utils/getData';
import TodayImage from '../../components/TodayImage';
import {PostImageType} from '../../types';
import {format, sub, subDays} from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';

const Home = () => {
  const [todayImage, setTodayImage] = useState<PostImageType>({});
  const [lastFiveImages, setLastFiveImages] = useState<PostImageType[]>([]);
  useEffect(() => {
    const getDailyImage = async () => {
      try {
        const dailyImage = await getData();
        setTodayImage(dailyImage);
      } catch (error) {
        console.error(error);
        setTodayImage({});
      }
    };

    const getLastFiveImages = async () => {
      try {
        const date = new Date();
        const today = format(subDays(date, 2), 'yyyy-MM-dd');
        const todayMinusFive = format(sub(date, {days: 6}), 'yyyy-MM-dd');
        const lastFiveDaysImagesResponse: PostImageType[] = await getData(
          `&start_date=${todayMinusFive}&end_date=${today}`,
        );
        setLastFiveImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };
    getDailyImage();
    getLastFiveImages();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...todayImage} />
      {!lastFiveImages.length ? (
        <View style={styles.gallerySpinner}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <LastFiveDaysImages lastFiveImages={lastFiveImages} />
      )}
    </View>
  );
};
<Header />;

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  gallerySpinner: {
    height: '45%',
    justifyContent: 'center',
  },
});

<Header />;
