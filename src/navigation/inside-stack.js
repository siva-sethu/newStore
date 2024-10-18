import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  AddTv,
  EnterCode,
  Selectstore,
  Service,
  Success,
  Settings,
  Home,
  SelectApp,
  AddPosDevice,
  Enterposname,
  EnterPosCode,
  Terminal,
  PosSuccess
} from '../screens';
import { BottomTabStack } from '../component/bottomTab/BottomTabStack';
import { Routes } from './routes';




const Stack = createStackNavigator();

export const InsideStack = () => {
  return (
    <Stack.Navigator>
      {/* Home and Settings route to BottomTabStack */}
      <Stack.Screen
        name={Routes.Home}
        component={BottomTabStack}
        options={{ headerShown: false }}
      />

     

      {/* Other screens that do not use BottomTabStack */}
    
    </Stack.Navigator>
  );
};
