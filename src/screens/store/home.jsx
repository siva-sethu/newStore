import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

import {typography} from '../../theme';
import {English} from '../../utils/en';
import {moderateScale} from '../../utils/responsive';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import { useHomeFunction } from '../../hooks/home/homelist';
import {Loader} from '../../ui-kit';
import HeaderComponent from '../../component/headerComponent';



export const Home = () => {
  const {branchData, loading,handleSelect} = useHomeFunction();

  return (
    <HeaderComponent
      navigationData={[
        {
          DisplayName: 'Store +',
          navigationName: 'Store',
        },
        {
          DisplayName: 'Roti ghar',
          navigationName: 'Roti ghar',
        },
      ]}
      component={
        <>
          {loading ? (
            <Loader />
          ) : (
            <View style={styles.container}>
              <View style={{marginTop: 25, marginBottom: 15}}>
                <Text style={styles.menuTitle}>
                  {English.menu_Screen.heading}
                </Text>
              </View>
              <ScrollView>
                <View style={styles.topRow}>
                  {branchData?.map((value, index) => (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.7}
                      onPress={() => handleSelect(value)}
                      style={styles.imageContainer}>
                      <Image
                        source={require('../../assets/image/selectstore.png')}
                        style={styles.image}
                      />
                      <View style={styles.textContainer}>
                        <Text style={styles.menuText}>{value.store_city}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          )}
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: typography.semibold,
    color: '#000000',
  },
  topRow: {
    flexWrap: 'wrap',
    width: '100%',
    gap: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    borderColor: 'grey',
    padding: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    width: '100%',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  menuText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: typography.bold,
  },
});
