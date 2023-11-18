import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Calendar from 'react-native-date-picker';
import Header from '../Header';
import getData, {base_url} from '../../utils/getData';
import {format} from 'date-fns';
import {PostImageType} from '../../types';

function DatePicker() {
  const [datePick, setDatePick] = useState(new Date('1995-06-16'));
  const [postImage, setPostImage] = useState<PostImageType>({});
  const {title, date, url, explanation, copyright} = postImage;
  const getPic = useCallback(async () => {
    const res = await getData(`&date=${format(datePick, 'yyyy-MM-dd')}`);
    setPostImage(res);
  }, [datePick, setPostImage]);

  useEffect(() => {
    getPic();
  }, [datePick]);

  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <Text style={styles.ttl}>Pick one from the calendar</Text>
        <Calendar
          date={datePick}
          mode="date"
          minimumDate={new Date('1995-06-16')}
          maximumDate={new Date()}
          textColor="rgb(132, 123, 246)"
          onDateChange={setDatePick}
        />
        {!postImage.title ? (
          <>
            <Text>No photo for this date.</Text>
            <ActivityIndicator size={'large'} color={'rgb(132, 123, 246)'} />
            <Text>Try another.</Text>
          </>
        ) : (
          <>
            <Text style={styles.ttl}>{title}</Text>
            <ScrollView>
              <Image source={{uri: url}} style={styles.img} />
              <Text style={styles.explanation}>{explanation}</Text>
              <Text>{copyright}</Text>
              <Text>{date}</Text>
            </ScrollView>
          </>
        )}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 20,
  },
  ttl: {
    color: 'rgb(132, 123, 246)',
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
  img: {
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  imgLoader: {height: 300, justifyContent: 'center'},

  explanation: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default DatePicker;
