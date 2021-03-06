import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MIcon from 'react-native-vector-icons/dist/MaterialIcons';
import ResultCards from '../components/ResultCards';
import axios from 'axios';
import moment from 'moment';

function Results({navigation}) {
  const [allData, setAllData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // const handleChange = event => {
  //   setSearchTerm(event);
  //   console.log(searchTerm);
  // };
  function searchMovie(text) {
    if (text !== '') {
      axios
        .get(
          'https://api.themoviedb.org/3/search/movie?api_key=8aa112291918d981bc0206b734023546&page=1' +
            '&query=' +
            text,
        )
        .then(response => {
          console.log(response.data.results);
          setSearchData(response.data.results);
        })
        .then(setLoading(true))
        .catch(err => console.log(err));
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movies/week?api_key=8aa112291918d981bc0206b734023546',
      )
      .then(response => {
        // console.log(response.data.results);
        setAllData(response.data.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  // useEffect(() => {
  //   const results = allData.filter(
  //     movie => movie.original_title.indexOf(searchTerm) !== -1,
  //   );
  //   console.log(searchTerm);
  //   setAllData(results);
  // }, [searchTerm]);

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
        <Text style={styles.title}>Results </Text>
        <MIcon name="tune" size={25} color="#fff" style={styles.icon} />
      </View>
      <View style={styles.searchbar}>
        <TextInput
          style={[
            styles.input,
            isFocused && {
              borderWidth: 2,
              borderColor: '#f08989',
              backgroundColor: '#fff',
            },
          ]}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholder="Avengers"
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            searchMovie(text);
          }}>
          {/* <Icon name="search" size={20} color="#000" /> */}
        </TextInput>
      </View>
      {loading === false ? (
        <ScrollView>
          {allData.map(movies => {
            return (
              <View key={movies.id}>
                <ResultCards
                  imgSrc={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  movieName={movies.original_title}
                  moviedesc="Action &#8226; Adventure &#8226; Drama"
                  year={moment(movies.release_date).format('YYYY')}
                  views={`${movies.vote_count} +`}
                  stars={`???${movies.vote_average}`}
                  duration="???? 3h 01min"
                />
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View>
          {searchData.map(movies => {
            return (
              <View key={movies.id}>
                <ResultCards
                  imgSrc={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                  movieName={movies.original_title}
                  moviedesc="Action &#8226; Adventure &#8226; Drama"
                  year={moment(movies.release_date).format('YYYY')}
                  views={`${movies.vote_count} +`}
                  stars={`???${movies.vote_average}`}
                  duration="???? 3h 01min"
                />
              </View>
            );
          })}
        </View>
      )}
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
    justifyContent: 'space-between',
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
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  input: {
    fontSize: 18,
    color: '#000',
    backgroundColor: '#e5e5e5',
    borderColor: '#bdbdbd',
    borderRadius: 20,
    borderWidth: 2,
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default Results;
