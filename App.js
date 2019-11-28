/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {SecondScreen} from './SecondScreen';
import {FirstScreen} from './FirstScreen';

const MainNavigator = createStackNavigator({
  First: {screen: FirstScreen},
  Second: {screen: SecondScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
