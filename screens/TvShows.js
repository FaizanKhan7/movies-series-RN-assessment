import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MovieCards from '../components/MovieCards';
import axios from 'axios';
import moment from 'moment';

function TvShows({navigation}) {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/tv?api_key=8aa112291918d981bc0206b734023546&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate',
      )
      .then(resposne => {
        // console.log(resposne.data.results);
        setAllData(resposne.data.results);
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
        <Text style={styles.title}>Tv Shows</Text>
      </View>
      <View style={styles.moviesWrapper}>
        {allData.map(series => {
          return (
            <View key={series.id}>
              <MovieCards
                movieName={series.original_name}
                genre="Series"
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

export default TvShows;
