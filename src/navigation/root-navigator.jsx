import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {Routes} from './routes';

import {InsideStack} from './index';
import { OutsideStack } from './outside-stack';
const Stack = createStackNavigator();

export const RootNavigator = React.forwardRef((props, ref) => {
  const {token} = useSelector(state => state.user);

  return (
    <NavigationContainer >
      <StatusBar barStyle="dark-content" backgroundColor={'#44B9B1'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* {!token ? ( */}
          <Stack.Screen name={Routes.OUTSIDE_STACK} component={OutsideStack} />
        {/* ) : ( */}
          <Stack.Screen name={Routes.INSIDE_STACK} component={InsideStack} />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
