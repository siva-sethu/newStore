import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import ClearBackSpace from '../../ui-kit/backspace';
import {color, typography} from '../../theme';
import {moderateScale} from '../../utils/responsive';
import {Dimensions, Image} from 'react-native';
import {Button} from '../../ui-kit';
import {English} from '../../utils/en';
import {TextInput} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

import {LoginFunction} from '../../hooks/authentication/login';
export const Login = () => {
  const {
    ThemeName,
    buttons,
    handleLogin,
    loading,
    merchantLogin,
    
    updatePin,
  } = LoginFunction();

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <View style={styles.leftArea}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image
              source={require('../../assets/image/merchantLogo.png')}
              style={{
                width: moderateScale(100),
                height: moderateScale(100),
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              right: 10,
              flex: 1,
            }}>
            <Text
              style={{
                fontSize: 48,
                color: color.palette.black,
                fontFamily: typography.semibold,
              }}>
              {English.merchant_screen.image_text}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: '95%',
            width: '95%',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderColor: color.palette.borderColor,
          }}>
          <View
            style={{
              width: '95%',
              height: '95%',
              backgroundColor: color.palette[ThemeName].layout,
              alignItems: 'center',
              borderRadius: moderateScale(5),
            }}>
            <View
              style={{
                width: '100%',
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.IntroText}>
                {English.merchant_screen.heading}
              </Text>
            </View>
            <View
              style={{
                height: '75%',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  width: '100%',
                  flex: 1,
                }}>
                <TextInput
                  style={styles.inputPlaceholderText}
                  placeholder={English.merchant_screen.place_holder_text}
                  value={merchantLogin.join('')}
                  editable={false}
                />

                <View style={styles.pinInputArea}>
                  {buttons.map((e, i) => (
                    <TouchableOpacity
                      key={i}
                      style={styles.pinContainer}
                      hitSlop={3}
                      onPress={() => {
                        
                        updatePin(e);
                      }}
                      activeOpacity={0.9}>
                      <>
                        {i === buttons.length - 1 ? (
                          <View style={{paddingTop: 8}}>
                            <ClearBackSpace
                              width={35}
                              height={35}
                              color={'#44B9B1'}
                            />
                          </View>
                        ) : (
                          <Text style={[styles.pinText, {color: '#44B9B1'}]}>
                            {' '}
                            {e}
                          </Text>
                        )}
                      </>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
            <View
              style={{height: '15%', width: '100%', justifyContent: 'center'}}>
              <View style={styles.buttonArea}>
                <Button
                  title={English.merchant_screen.button_text}
                  style={[styles.btn, {backgroundColor: '#44B9B1'}]}
                  loading={loading}
                  onPress={() => {
                    
                    handleLogin();
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.palette.backgroundGrey,
  },
  IntroText: {
    fontSize: 24,
    color: color.palette.black,
    textAlign: 'center',
    fontFamily: typography.semibold,
  },

  buttonArea: {
    alignItems: 'center',
    padding: 4,
    // marginTop:20
  },

  leftArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightArea: {
    height: '95%',
    width: '50%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  btn: {
    // marginTop: moderateScale(35),
    marginHorizontal: 20,
    height: 50,

    width: 160,
  },
  inputStyle: {
    height: 56,
    borderRadius: 5,
    marginTop: 60,
    borderColor: color.palette.borderColor,
    width: moderateScale(180),
    alignSelf: 'center',
  },
  rightLayout: {
    flex: 0.6,
    justifyContent: 'center',
    marginRight: 30,
    backgroundColor: color.palette.white,
  },
  innrCardRhtLayout: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: moderateScale(5),
  },
  footerText: {
    fontSize: 15,
    color: color.palette.black,
    fontFamily: typography.regular,
    // marginTop: moderateScale(15),
  },
  clickhereText: {
    fontSize: 15,
    color: color.palette.neonGreen,
    fontFamily: typography.medium,
  },

  pinAreaCard: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: width / 40,
  },
  dotDisplay: {flexDirection: 'row', gap: 15, justifyContent: 'center'},
  dotDisplayContainer: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.palette.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotactive: {},
  pinInputArea: {
    // flex:1,
    width: '65%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
  },
  pinContainer: {
    width: '20%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinText: {
    color: color.palette.btnColor,
    fontSize: 25,
    fontFamily: typography.semibold,
  },
  inputPlaceholderText: {
    borderWidth: 0.5,
    fontFamily: typography.regular,
    color: color.palette.black,
    width: '95%',
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderColor: 'grey',
    borderRadius: 8,
    borderColor: '#5D5D5D',
    // paddingTop:20,
    padding: 0,
  },
});
