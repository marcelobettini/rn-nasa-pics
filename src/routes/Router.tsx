import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationParams} from '../types';
import Home from '../views/Home';
import PicInfo from '../components/PicInfo';
import DatePicker from '../components/DatePicker';
const Stack = createNativeStackNavigator<StackNavigationParams>();
const routerScreensDefault = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'rgb(132, 123, 246)',
  },
  headerTitleStyle: {
    // color: 'pink',
  },
  headerTitleAlign: 'center' as const, //because this prop awaits "center"|"left"|"undefined"
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
          name="+ Info"
          component={PicInfo}
          options={routerScreensDefault}
        />
        <Stack.Screen
          name="Date Picker"
          component={DatePicker}
          options={routerScreensDefault}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
