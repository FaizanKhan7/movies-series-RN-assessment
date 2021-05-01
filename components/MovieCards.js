import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
function MovieCards({movieName, genre, year, imgSrc}) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.poster}
        source={{
          uri: imgSrc,
        }}
      />
      <Text style={styles.movieName}>{movieName}</Text>
      <Text style={styles.genre}>
        {genre} &#8226; {year}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 150,
    margin: 20,
  },
  poster: {
    width: 150,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  movieName: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  genre: {
    color: 'grey',
  },
});

export default MovieCards;
