import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../../navigation/routes';
import {Home} from '../../screens';
import {color, typography} from '../../theme';


const BottomTabs = createBottomTabNavigator();

export const BottomTabStack = () => {
  

  return (
    <BottomTabs.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        tabBarStyle: {height: 56, backgroundColor: color.palette.white},
        headerShown: false,
      }}>
      <BottomTabs.Screen
        name={Routes.Home}
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarInactiveTintColor: color.palette.brown,
          tabBarActiveTintColor: color.palette.btnColor,
          title: '',
          tabBarIcon: ({focused}) => (
            <View style={styles.tabView}>
              <Image
                source={require('../../assets/image/home.png')}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? color.palette.neonGreen
                      : color.palette.black,
                  },
                ]}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: focused
                      ? color.palette.neonGreen
                      : color.palette.black,
                  },
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
     
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.primary,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 7,
  },
  tabView: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    height: 17.34,
    width: 17.16,
  },
  badgeContainer: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: color.palette.red,
    position: 'absolute',
    left: 15,
    top: -10,
    height: 20,
    width: 20,
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: color.palette.white,
    fontFamily: typography.primary,
    fontSize: 10,
    textAlign: 'center',
  },
});
