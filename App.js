import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Results from './screens/Results';
import TvShows from './screens/TvShows';
import Featured from './screens/Featured';
import TopMovies from './screens/TopMovies';
import WatchHistory from './screens/WatchHistory';
import ReviewForm from './screens/ReviewForm';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Results"
          component={Results}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TvShows"
          component={TvShows}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Featured"
          component={Featured}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TopMovies"
          component={TopMovies}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="WatchHistory"
          component={WatchHistory}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ReviewForm"
          component={ReviewForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
