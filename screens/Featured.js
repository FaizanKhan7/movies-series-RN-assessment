import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MovieCards from '../components/MovieCards';
import axios from 'axios';
import moment from 'moment';

function Featured({navigation}) {
  const [allData, setAllData] = useState([]);
  const [allData2, setAllData2] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=8aa112291918d981bc0206b734023546&language=en-US&page=1',
      )
      .then(resposne => {
        // console.log(resposne.data.results);
        setAllData(resposne.data.results);
      })
      .catch(error => {
        console.log('error', error);
      });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=8aa112291918d981bc0206b734023546&language=en-US&page=2',
      )
      .then(resposne => {
        // console.log(resposne.data.results);
        setAllData2(resposne.data.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  });
  return (
    <ScrollView>
      <View style={styles.header}>
        <Icon
          name="chevron-left"
          size={20}
          color="#fff"
          style={styles.icon}
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.title}>Featured movies</Text>
      </View>
      <View style={styles.moviesWrapper}>
        {allData.map(series => {
          return (
            <View key={series.id}>
              <MovieCards
                movieName={series.original_title}
                genre="Movie"
                year={moment(series.first_air_date).format('YYYY')}
                imgSrc={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
              />
            </View>
          );
        })}
        {allData2.map(series => {
          return (
            <View key={series.id}>
              <MovieCards
                movieName={series.original_title}
                genre="Movie"
                year={moment(series.first_air_date).format('YYYY')}
                imgSrc={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: '100%',
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
  moviesWrapper: {
    marginLeft: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default Featured;
