import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomButton from '../components/CustomButton';

const reviewSchema = Yup.object({
  movieTitle: Yup.string().required().min(4),
  thoughtsOnMovie: Yup.string().required().min(15),
  rating: Yup.string()
    .required()
    .test('is-num-1-10', 'rating must be number 1-10', val => {
      return parseInt(val) < 11 && parseInt(val) > 0;
    }),
});

function Reviews({navigation}) {
  const [reviews, setReviews] = useState([
    {
      movieTitle: 'Tenet',
      rating: 9,
      thoughtsOnMovie: 'A great moive by christoper nolan',
      key: '1',
    },
    {
      movieTitle: 'Tenet',
      rating: 9,
      thoughtsOnMovie: 'A great moive by christoper nolan',
      key: '2',
    },
    {
      movieTitle: 'Tenet',
      rating: 9,
      thoughtsOnMovie: 'A great moive by christoper nolan',
      key: '3',
    },
  ]);

  const addReview = review => {
    review.key = Math.random().toString();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <View style={styles.header}>
          <Icon
            name="chevron-left"
            size={20}
            color="#fff"
            style={styles.icon}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.title}>Add movie reviews </Text>
        </View>
        <View>
          <Formik
            initialValues={{movieTitle: '', thoughtsOnMovie: '', rating: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              addReview(values);
              // console.log(values);
            }}>
            {formikProps => (
              <View style={styles.formWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="ex: tenet"
                  onChangeText={formikProps.handleChange('movieTitle')}
                  value={formikProps.values.movieTitle}
                  onBlur={formikProps.handleBlur('movieTitle')}
                />
                <Text style={styles.errorText}>
                  {formikProps.touched.movieTitle &&
                    formikProps.errors.movieTitle}
                </Text>

                <TextInput
                  multiline
                  minHeight={80}
                  style={styles.input}
                  placeholder="Write something about the movie"
                  onChangeText={formikProps.handleChange('thoughtsOnMovie')}
                  value={formikProps.values.thoughtsOnMovie}
                  onBlur={formikProps.handleBlur('thoughtsOnMovie')}
                />
                <Text style={styles.errorText}>
                  {formikProps.touched.thoughtsOnMovie &&
                    formikProps.errors.thoughtsOnMovie}
                </Text>

                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder="ex: 7"
                  onChangeText={formikProps.handleChange('rating')}
                  value={formikProps.values.rating}
                  onBlur={formikProps.handleBlur('rating')}
                />
                <Text style={styles.errorText}>
                  {formikProps.touched.rating && formikProps.errors.rating}
                </Text>

                <CustomButton
                  text="submit"
                  onPress={formikProps.handleSubmit}
                />
              </View>
            )}
          </Formik>
          <View>
            <FlatList
              data={reviews}
              renderItem={({item}) => (
                <View style={styles.reviews}>
                  <Text style={styles.movieTitle}>{item.movieTitle}</Text>
                  <Text style={styles.thought}>{item.thoughtsOnMovie}</Text>
                  <Text style={styles.star}>⭐ {item.rating}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  formWrapper: {
    margin: 20,
  },
  input: {
    marginTop: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  reviews: {
    borderColor: '#000000aa',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ddd',
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  thought: {
    marginBottom: 5,
    fontSize: 16,
  },
  star: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft: 5,
  },
});
export default Reviews;
