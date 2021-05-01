import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MovieCards from '../components/MovieCards';

function Featured({navigation}) {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Icon
            name="chevron-left"
            size={25}
            color="#fff"
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.title}>Featured </Text>
        </View>

        <View style={styles.cards}>
          <MovieCards
            movieName="Tenet"
            genre="Movie"
            year={2021}
            imgSrc="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
          />
          <MovieCards
            movieName="Outside the wire"
            genre="Movie"
            year={2021}
            imgSrc="https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
          />
        </View>
        <View style={styles.cards}>
          <MovieCards
            movieName="WandaVision"
            genre="Series"
            year={2021}
            imgSrc="https://collider.com/wp-content/uploads/2020/09/wandavision-poster.jpg"
          />
          <MovieCards
            movieName="Nobody"
            genre="Movie"
            year={2021}
            imgSrc="https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UY1200_CR64,0,630,1200_AL_.jpg"
          />
        </View>
        <View style={styles.cards}>
          <MovieCards
            movieName="Money heist"
            genre="Series"
            year={'2017 -'}
            imgSrc="https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          />
          <MovieCards
            movieName="Avengers Endgame"
            genre="Movie"
            year={2019}
            imgSrc="https://i.pinimg.com/originals/8c/34/8f/8c348fa005a1626c03e00b5379501bd5.jpg"
          />
        </View>
      </View>
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
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Featured;
