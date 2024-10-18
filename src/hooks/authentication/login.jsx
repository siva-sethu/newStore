import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {useState} from 'react';
import {merchantLoginApi} from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Routes} from '../../navigation';
import {setLoginToken, setMercahntNumber} from '../../redux/slice/user';
import {setStoreID} from '../../redux/slice/store';

export const LoginFunction = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [merchantLogin, setMerchantLogin] = useState([]);
  const [loading, setLoading] = useState(false);
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'];
  const ThemeName = useSelector(state => state.auth.selected_Theme_name);
  const {store_id} = useSelector(state => state.store);

  const handleLogin = async () => {
    setLoading(true);
    if (merchantLogin?.length < 10) {
      setLoading(false);
    } else {
      try {
        const payload = {
          merchant_phone_number: merchantLogin.join(''),
        };
        const res = await merchantLoginApi(payload);

        if (res) {
          if (store_id !== merchantLogin.join('')) {
            dispatch(setStoreID(null));
          }
          dispatch(setMercahntNumber(merchantLogin.join('')));
          dispatch(setLoginToken(res?.token));
          navigation.navigate(Routes.OTP);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, 'login');
        setLoading(false);
      }
    }
  };

  function updatePin(e) {
    if (e === '<' || e === 'C') {
      if (e === 'C') {
        setMerchantLogin([]);
      } else {
        setMerchantLogin(prev => prev.slice(0, -1));
      }
      return;
    }
    if (merchantLogin.length <= 9) {
      setMerchantLogin(prev => [...prev, e]);
    }
  }

  return {
    
    navigation,
    dispatch,
    merchantLogin,
    setMerchantLogin,
    loading,
    setLoading,
    buttons,
    ThemeName,
    handleLogin,
    updatePin,
  };
};
