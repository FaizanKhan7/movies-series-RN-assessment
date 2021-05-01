import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function Home({navigation}) {
  return (
    <View>
      <ImageBackground
        source={{
          uri:
            'https://img.freepik.com/free-vector/home-movie-background-with-popcorn_1419-1852.jpg?size=338&ext=jpg',
        }}
        style={styles.bgImg}>
        <Text style={styles.text}>Latest Movies & series</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btnWidth}
          onPress={() => navigation.navigate('Featured')}>
          <Text style={styles.btn}>Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btnWidth}
          onPress={() => navigation.navigate('Results')}>
          <Text style={styles.btn}>Search Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btnWidth}
          onPress={() => navigation.navigate('TvShows')}>
          <Text style={styles.btn}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btnWidth}
          onPress={() => navigation.navigate('TopMovies')}>
          <Text style={styles.btn}>Top Rated Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.btnWidth}
          onPress={() => navigation.navigate('WatchHistory')}>
          <Text style={styles.btn}>Watch History</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: 660,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
    paddingVertical: 10,
    marginBottom: 40,
  },
  btnWidth: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 20,
    fontSize: 21,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#f08989',
    borderRadius: 6,
  },
});
export default Home;
