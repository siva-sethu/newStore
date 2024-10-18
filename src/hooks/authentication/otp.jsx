import React, {useRef, useState} from 'react';
;
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Routes} from '../../navigation';
import {Animated} from 'react-native';
import {verifyOtp} from '../../api';
import {setMerchantDetails, setToken} from '../../redux/slice/user';

export const OtpFunction = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState([]);
  const [loading, setLoading] = useState(false);
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'];
  const display = [1, 2, 3, 4, 5, 6];
  const shakingDot = useRef(new Animated.Value(0)).current;
  const {selected_Theme_name: ThemeName} = useSelector(state => state.auth);
  const {loginToken} = useSelector(state => state.user);

  const handleLogin = async () => {
    setLoading(true);

    if (otp?.length < 6) {
      setLoading(false);
    } else {
      try {
        const payload = {
          otp: otp.join(''),
          type: 'token_app',
        };

        const header = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${loginToken}`,
        };
        const res = await verifyOtp(payload, header);
        if (res) {
          dispatch(setToken(res?.token));
          dispatch(setMerchantDetails(res?.data));
          navigation.navigate(Routes.INSIDE_STACK);
          setLoading(false);
        }
      } catch (error) {
        console.log(error,'otp');
        setLoading(false);
      }
    }
  };

  function updatePin(e) {
    if (e === '<' || e === 'C') {
      if (e === 'C') {
        setOtp([]);
      } else {
        setOtp(prev => prev.slice(0, -1));
      }
      return;
    }
    if (otp.length < 6) {
      setOtp(prev => [...prev, e]);
    }
  }

  return {
    
    navigation,
    dispatch,
    otp,
    setOtp,
    loading,
    buttons,
    display,
    shakingDot,
    ThemeName,
    handleLogin,
    updatePin,
  };
};
