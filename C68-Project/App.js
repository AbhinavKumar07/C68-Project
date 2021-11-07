import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
});

const AppContainer = createAppContainer(TabNavigator);
