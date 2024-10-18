import React, {useRef, useState} from 'react';
import 'react-native-gesture-handler';
import * as storage from './src/utils/storage';
import {
  RootNavigator,
  setRootNavigation,
  useNavigationPersistence,
} from './src/navigation';
import {NAVIGATION_PERSISTENCE_KEY} from './src/constants/keys';

import Provider from './src/redux/provider/Provider';

const App = () => {
  
  const navigationRef = useRef();
  setRootNavigation(navigationRef);
  const {initialNavigationState, onNavigationStateChange} =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);
  return (
    <Provider>
      
        <RootNavigator
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      
    </Provider>
  );
};

export default App;