import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {ProgressBar, Colors} from 'react-native-paper';
function WatchHistoryCard({
  imageSrc,
  movieTitle,
  timeStamp,
  progressCompleted,
}) {
  return (
    <View style={styles.mainWrapper}>
      <ImageBackground
        source={{
          uri: imageSrc,
        }}
        style={styles.image}
        imageStyle={{borderRadius: 25}}>
        <Icon name="play-circle" size={40} color="#fff" />
      </ImageBackground>
      <View>
        <Text style={styles.movieName}>{movieTitle}</Text>
        <Text style={styles.genre}>{timeStamp}</Text>
        <ProgressBar
          progress={progressCompleted}
          color={Colors.red300}
          style={styles.bar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 30,
    width: 120,
    height: 85,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  genre: {
    fontWeight: '600',
    color: 'grey',
  },
  movieName: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  bar: {
    marginVertical: 14,
  },
});

export default WatchHistoryCard;
