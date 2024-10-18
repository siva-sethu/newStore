import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Login, Otp} from '../screens';
import {Routes} from './routes';
import {StatusBar} from 'react-native';


const Stack = createStackNavigator();
export const OutsideStack = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#44B9B1'} />
      <Stack.Navigator>
        <>
          <Stack.Screen
            name={Routes.LOGIN}
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={Routes.OTP}
            component={Otp}
            options={{headerShown: false}}
          />
        </>
      </Stack.Navigator>
    </>
  );
};
