import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import WatchHistoryCard from '../components/WatchHistoryCard';

function WatchHistory({navigation}) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Icon
          name="chevron-left"
          size={25}
          color="#fff"
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.title}>Watch History </Text>
      </View>

      <Text style={styles.subtitle}>Today</Text>
      <WatchHistoryCard
        imageSrc="https://at-cdn-s02.audiotool.com/2017/10/17/documents/stranger_things_kib_s_entry/7/cover256x256-ac0774653acf42d9b07ff2f86d547a07.jpg"
        movieTitle="Strange Things"
        timeStamp="Series &#8226; S3 E03 &#8226; 52mins"
        progressCompleted={0.6}
      />
      <WatchHistoryCard
        imageSrc="https://avatarfiles.alphacoders.com/185/thumb-1920-185992.png"
        movieTitle="Avengers Endgame"
        timeStamp="Movie &#8226;  3h 01mins"
        progressCompleted={0.9}
      />
      <WatchHistoryCard
        imageSrc="https://static.wikia.nocookie.net/marvel-contestofchampions/images/6/62/Sunspot_portrait.png/revision/latest?cb=20190807141603"
        movieTitle="The new mutants"
        timeStamp="Movie &#8226;  1h 34mins"
        progressCompleted={1}
      />
      <Text style={styles.subtitle}>Yesterday</Text>
      <WatchHistoryCard
        imageSrc="https://c-sf.smule.com/rs-s-sf-3/arr/82/3e/0ab11df3-7ad0-4284-8ee5-acf95b6c9e7d.jpg"
        movieTitle="The Witcher"
        timeStamp="Series &#8226; S1 E09 &#8226; 52mins"
        progressCompleted={1}
      />
      <WatchHistoryCard
        imageSrc="https://m.media-amazon.com/images/I/51kI5RoEVkL._AA256_.jpg"
        movieTitle="13 Reasons why"
        timeStamp="Series &#8226; S4 E02 &#8226; 42mins"
        progressCompleted={1}
      />
      <WatchHistoryCard
        imageSrc="https://c-sf.smule.com/rs-s89/arr/3f/67/e4c72d64-3954-4dc9-98a3-acfb9fc5736f.jpg"
        movieTitle="The Nun"
        timeStamp="Movie &#8226; 1hr 36mins"
        progressCompleted={0.7}
      />
      <WatchHistoryCard
        imageSrc="https://cdn.substack.com/image/fetch/w_1200,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4745946-4d97-4f45-8997-e9c9c4be1747_400x381.jpeg954-4dc9-98a3-acfb9fc5736f.jpg"
        movieTitle="Start up"
        timeStamp="series &#8226; 1hr 01mins"
        progressCompleted={0.7}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#f08989',
    marginVertical: 15,
    marginHorizontal: 30,
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  title: {
    flex: 0.7,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 30,
  },
});

export default WatchHistory;
