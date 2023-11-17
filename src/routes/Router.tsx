import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationParams} from '../types';
import Home from '../views/Home';
import PicInfo from '../components/PicInfo';
const Stack = createNativeStackNavigator<StackNavigationParams>();
const routerScreensDefault = {
  headerStyle: {
    backgroundColor: 'rgb(132, 123, 246)',
  },
  headerTitleStyle: {
    color: 'white',
  },
};
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routerScreensDefault}
        />
        <Stack.Screen
          name="PicInfo"
          component={PicInfo}
          options={routerScreensDefault}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
