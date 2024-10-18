import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const useAuth = () => {
  const {token} = useSelector(state => state.user);

  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization: `Bearer ${token}`,
  };

  return {header};
};

export default useAuth;
