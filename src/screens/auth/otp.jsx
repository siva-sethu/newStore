import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import ClearBackSpace from '../../ui-kit/backspace';
import {color, typography} from '../../theme';
import {moderateScale, verticalScale} from '../../utils/responsive';
import {Dimensions, Image, Animated} from 'react-native';
import {verifyOtp} from '../../api';
import {Button} from '../../ui-kit';
import {English} from '../../utils/en';
const {width} = Dimensions.get('window');

import {OtpFunction} from '../../hooks/authentication/otp';

export const Otp = () => {
  const {
    ThemeName,
    buttons,
    display,
    handleLogin,
    loading,
    otp,
    shakingDot,
    updatePin,
  } = OtpFunction();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <View style={styles.leftArea}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              right: 10,
            }}>
            <Text
              style={{
                fontSize: 48,
                color: color.palette.black,
                fontFamily: typography.semibold,
              }}>
              {English.otp_screen.image_text}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: '95%',
            width: '95%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.5,
            borderColor: 'grey',
          }}>
          <View
            style={{
              width: '95%',
              height: '95%',
              backgroundColor: color.palette[ThemeName].layout,
              alignItems: 'center',
              borderRadius: moderateScale(5),
              // marginTop: 12
            }}>
            <View
              style={{
                flex: 1,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.IntroText}>{English.otp_screen.heading}</Text>
              <Text style={{fontSize: 16, color: color.palette.black}}>
                {English.otp_screen.bottom_text}
              </Text>
            </View>
            <View
              style={{
                height: '70%',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '100%',
                  flex: 1,
                }}>
                <Animated.View
                  style={[
                    styles.dotDisplay,
                    {
                      transform: [{translateX: shakingDot}],
                    },
                  ]}>
                  {display.map((_, i) => (
                    <View key={i} style={styles.dotDisplayContainer}>
                      {otp.map((_, j) => (
                        <View key={j}>
                          {i == j && (
                            <View style={styles.dotactive}>
                              <Text
                                style={{
                                  fontFamily: typography.bold,
                                  fontSize: 20,
                                  color: '#44B9B1',
                                  top: 2,
                                }}>
                                {otp[i]}
                              </Text>
                            </View>
                          )}
                        </View>
                      ))}
                    </View>
                  ))}
                </Animated.View>
                <View style={{width: '100%', alignItems: 'flex-end'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: typography.regular,
                      color: '#5D5D5D',
                    }}>
                    {English.otp_screen.Otp_message}
                  </Text>
                </View>
                <View style={{marginBottom: 20}}>
                  <View style={styles.pinInputArea}>
                    {buttons.map((e, i) => (
                      <TouchableOpacity
                        key={i}
                        style={styles.pinContainer}
                        onPress={() => {
                          
                          updatePin(e);
                        }}
                        activeOpacity={0.9}>
                        <>
                          {i === buttons.length - 1 ? (
                            <ClearBackSpace
                              width={35}
                              height={35}
                              color={'#44B9B1'}
                            />
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
            </View>
            <View
              style={{height: '15%', width: '100%', justifyContent: 'center'}}>
              <View style={styles.buttonArea}>
                <Button
                  title={English.otp_screen.button_text}
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
    // marginBottom: 20,
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
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: width / 40,
  },
  dotDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  dotDisplayContainer: {
    width: verticalScale(45),
    height: verticalScale(45),
    borderRadius: 7,
    borderWidth: 1,
    borderColor: color.palette.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotactive: {},
  pinInputArea: {
    width: '65%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    // backgroundColor:"yellow",
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
});
