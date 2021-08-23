// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from './NavStack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers/index';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </Provider>
  );
}

// console.disableYellowBox = true;
