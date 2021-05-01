import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function ResultCards({
  imgSrc,
  movieName,
  moviedesc,
  year,
  views,
  stars,
  duration,
}) {
  console.log(imgSrc);
  return (
    <View style={styles.movieWrapper}>
      <Image
        style={styles.poster}
        source={{
          uri: imgSrc,
        }}
      />
      <View style={styles.movieDesc}>
        <Text style={styles.movieName}>{movieName}</Text>
        <Text style={styles.genre}>{moviedesc}</Text>
        <View style={styles.description}>
          <Text style={styles.status}>{year}</Text>
          <Text style={styles.status}>{views}</Text>
          <Text style={styles.status}>{stars}</Text>
          <Text style={styles.status}>{duration}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movieWrapper: {
    marginHorizontal: 30,
    marginVertical: 10,
    flexDirection: 'row',
  },
  movieDesc: {
    marginLeft: 10,
  },
  description: {
    width: 220,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  poster: {
    width: 130,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  movieName: {
    marginVertical: 6,
    fontSize: 15,
    fontWeight: 'bold',
  },
  genre: {
    fontSize: 14,
    marginVertical: 3,
    color: 'grey',
  },
  status: {
    color: '#000',
    backgroundColor: 'lightgrey',
    margin: 10,
    padding: 12,
    borderRadius: 25,
  },
});

export default ResultCards;
