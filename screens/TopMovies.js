import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';
import moment from 'moment';
import ResultCards from '../components/ResultCards';

function TopMovies({navigation}) {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=8aa112291918d981bc0206b734023546&language=en-US&page=1',
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
        <Text style={styles.title}>Top Rated Movies</Text>
      </View>
      <View style={styles.moviesWrapper}>
        {allData.map(movies => {
          return (
            <View key={movies.id}>
              <ResultCards
                imgSrc={`https://image.tmdb.org/t/p/original/${movies.poster_path}`}
                movieName={movies.title}
                moviedesc="Action &#8226; Adventure &#8226; Drama"
                year={moment(movies.release_date).format('YYYY')}
                views={`${movies.vote_count} +`}
                stars={`⭐${movies.vote_average}`}
                duration="🕒 3h 01min"
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

export default TopMovies;
